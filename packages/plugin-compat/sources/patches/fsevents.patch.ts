let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`).brotliDecompressSync(Buffer.from(`G5EUAIyE3MTqSxQnPMj/lqvuXE5vZiUQgRbPsmInlbZkNtCTNig+I9YrIC09fZ+10t4VUFWYOoFSd5P8pB06AC6x6ySzdIBq36oC2lPVqM5XWNNjuNbDCsYFVzv40ulJTWstimLTRtTKUv13cks4e3+LkTlcmoCTFjzZxhusugx2i2L5EMuy7PVnL1+i6I/ybhe+HBihUpjKpVkU8thR0wT9uymXykkl67IOaIw1ARr8r0kycVJp5v4enUukGOjoZmsli4VpFlXCJficwB0bsM5YMpobfv/9vyFOXIcb0/vDJBE5zHZZlAzslV/vv0PzP+CJVJeWkia1GkFNjSuxopelJ2pw72PtoeFTaRfZl+qCN6zmmCAQTZLmmG3upSdu+ey7QxujCfuOY9qSWS3OQHhZVm0owMKvgzkM+R7laBvR9ZAyGeorkqPQ3H8nNyZybuQtRRt0rXRpDTNkOIojcvDPGiJ+Mujbm76s+yNgyUhzaCNPrKxbkoNd6SWeKdG+p7Ex0c1d12ptW2T+X6gnu/LxQq/b06Mvk+51lW2a/qzD9+N5cFdKp1DC+/KuqLDryCDvzSa21Qt+u9CRx3epHkgMP1Qymnxg+cLs3sTxlPkfh4yItaQEoaBbnNy3CzbBom0GpXeLMzy+e2TCKYr1eRCa+Guw4X1m2pKUHJjzRv2AC+jnXj4KXOSCzHm26a7mL34/bXWgPt4r2scjJol7zgvMDhBnCWyCuHSNMQBqzKnWE8uMK+eSHyqZ9FsVd8n6bl3vTP//TudKGuwhjFABrz2zRGUbYaG2vhVm6hdqxfYp3yTMQ2m0Q/kPZX5To8HAKu+pxlwq52CLFBgY471O3oGHu8P7YUZK2ERoQEiqOg4X2kj2V3S2/k9Y+fuhVvNOMV16rMqCPYbt7t/gC8VfzOarL/uX2cO6SF8sHi8Y4QwIvrrWRpbNomJZvBAvngdk+pQKSreLRVYIH2OUEe43jMILJ3v0gqw/4I1fJIRyk0JoIPVkgAijOWxcF2XThvQu5VBd593lzeS8v8wrUDE6WCIGKo/9OC0dLw7QUpVUHygcCYaoh0+eABjWyIIdBmtGuSWNw1/UqKRU1T+1CIO7xjN0cWYHgioddmqmkhVVPEXCJzDaJy5yydZKtMixJoLS5gcNUjqMB8qwBokPBrwaCXiSoAeIKg1NLfXsy0f9UfVaarXeju8cy2XfDgH7cVwa62X33HMBzsJR3vRvb403x8Yc/9/8CMZ8cy4SFySsXNhtFAxnaFr+nYOBW6n6kszPH6R08vhn6HwJZ9Fiz2gYH52tIfIigjLsNLTe8BXiSFA7KwFKp0jOK9ebmlUCyaYOGeslGuYfhGQdRuXWvCPobyWi3XyRWEDPkFlPSi80wLUak5kOBLWbMCXfQSujSj1IvKOBIs/mEqgHEBOUMWmdpAOmi4cKLFiwYIEjMQnxDCo8EOWMjPm22YU1F7hPu7RPPJPQFvJ+2w51elG2So+Qlku61bhI1zy4GPij4scG5Jyla6kJfc6Asi/RA6DvIoP/Gbo3cSSY39ssNnwBIsfSlErTxml69DyiwBm1ohVdYj4HrdOXM7kdd+mDZgdT9aUfz4WxQ1Yh4+VGTmhugHQkdBg0pQDORmO9FOM4KgcMQj2rc9JcRx8rowWzMGKaRiTbxTS7M+qU4g1PePB1Ku9jt0RsjaNwzNlmgC1K68KujGzna5BrAUSpocdKIhaaxxLHLg9vzh2LspvAMz/3sg+RHZmDcOyusgav9gC8zjR98lmfMTHX3u4iE6mWqnc6k7Fb4MBKZdNxpBg4LMWP40gp67AhZNZB9EMkbK5oPFUHgRLerUvxwZzBZhPGpY6Gjk/DaIVojBpTVhRLPJS77k7ReT2m33oQELt6qD2vVEFXDz0AMBAvCb1zos/8sCJQ3kHnpYnFLNC6W38Mr45VfvBxbXM078R/fgymAgeht0mDJQM=`, `base64`)).toString();

  return patch;
}
