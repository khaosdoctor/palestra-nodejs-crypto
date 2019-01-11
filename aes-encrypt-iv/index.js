const crypto = require('crypto')
const algorithm = 'aes-256-ctr'
const password = crypto.randomBytes(16).toString('hex')
const iv = crypto.randomBytes(16)

function encrypt (data) {
  let cipher = crypto.createCipheriv(algorithm, password, iv)
  let crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

function decrypt (data) {
  let decipher = crypto.createDecipheriv(algorithm, password, iv)
  let deciphered = decipher.update(data, 'hex', 'utf8')
  deciphered += decipher.final('utf8')
  return deciphered
}

const data = process.argv[2]
let enc = encrypt(data)
console.log(`Text "${data}" encrypted with password "${password}" with result "${enc}" (IV: "${iv.toString('hex')}")`)
console.log(`Text "${enc}" decrypted with password "${password}" with result "${decrypt(enc)}"`)