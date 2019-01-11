const crypto = require('crypto');
const password = crypto.randomBytes(16).toString('hex')
const sha = crypto.createHmac('sha256', password)
const data = process.argv[2]

sha.update(data)
console.log(`Text "${data}" created with password "${password} with result "${sha.digest('hex')}"`)