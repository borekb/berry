const path = require(`path`);

let pnpApi = null;
try {
  pnpApi = require(`pnpapi`);
} catch {
}

function getVirtualLookupFn(pnpApi) {
  const reverseMap = new Map();

  const registerLocationAlias = (resolvedLocation, aliasLocation) => {
    const aliases = reverseMap.get(resolvedLocation) || [resolvedLocation];
    reverseMap.set(resolvedLocation, aliases);
    aliases.push(aliasLocation);
  };

  const seen = new Set();

  const getKey = locator =>
    JSON.stringify(locator);

  const isPeerDependency = (pkg, parentPkg, name) =>
    getKey(pkg.packageDependencies.get(name)) === getKey(parentPkg.packageDependencies.get(name));

  const traverseDependencyTree = (locator, parentPkg = null) => {
    const key = getKey(locator);
    if (seen.has(key))
      return;

    const pkg = pnpApi.getPackageInformation(locator);
    console.assert(pkg, `The package information should be available`);

    const resolvedLocation = pnpApi.resolveVirtual(pkg.packageLocation);
    if (resolvedLocation !== null)
      registerLocationAlias(resolvedLocation, pkg.packageLocation);

    seen.add(key);

    for (const [name, referencish] of pkg.packageDependencies) {
      // Unmet peer dependencies
      if (referencish === null)
        continue;

      // Avoid iterating on peer dependencies - very expensive
      if (parentPkg !== null && isPeerDependency(pkg, parentPkg, name))
        continue;

      const childLocator = pnpApi.getLocator(name, referencish);
      traverseDependencyTree(childLocator, pkg);
    }

    seen.delete(key);
  };

  // Iterate on each workspace
  for (const locator of pnpApi.getDependencyTreeRoots())
    traverseDependencyTree(locator);

  const keys = [...reverseMap.keys()].sort((a, b) => {
    return b.length - a.length;
  });

  return p => {
    const prefix = keys.find(candidate => p.startsWith(candidate));
    if (typeof prefix === `undefined`)
      return [p];

    const sub = p.substr(prefix.length);
    return reverseMap.get(prefix).map(alias => {
      return alias + sub;
    });
  };
}

if (pnpApi != null) {
  const resolveVirtualAliases = getVirtualLookupFn(pnpApi);

  module.exports = class FsePnp {
    constructor(p) {
      this.normalizedPath = path.resolve(p);
      this.resolvedPath = pnpApi.resolveVirtual(this.normalizedPath) || this.normalizedPath;
    }

    transpose(p) {
      if (this.resolvedPath !== null) {
        return this.normalizedPath + p.substr(this.resolvedPath.length);
      } else {
        return p;
      }
    }

    wrap(fn) {
      return (path, ...args) => {
        for (const entry of resolveVirtualAliases(path)) {
          fn(this.transpose(entry), ...args);
        }
      };
    }
  };
} else {
  module.exports = class FsePnp {
    constructor(p) {
      this.resolvedPath = p;
    }

    wrap(fn) {
      return fn;
    }
  };
}
