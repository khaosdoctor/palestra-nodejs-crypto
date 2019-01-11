const crypto = require('crypto');
const salt = crypto.randomBytes(16).toString('hex')
const iterations = 1000
const keylen = 64
const algorithm = 'sha512'
const data = process.argv[2]
const result = crypto.pbkdf2Sync(data, salt, iterations, keylen, algorithm).toString('hex')

console.log(`Data "${data}" encrypted ${iterations} times with ${algorithm} (${keylen} bytes) with result ${result} (Salt: "${salt}")`)