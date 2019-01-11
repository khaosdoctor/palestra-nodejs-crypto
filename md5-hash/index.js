const crypto = require('crypto');
const md5 = crypto.createHash('md5')
const data = process.argv[2]

md5.update(data)
console.log(`Text "${data}" created with result "${md5.digest('hex')}"`)