const crypto = require('crypto')
const algorithm = 'aes-256-gcm'
const password = crypto.randomBytes(16).toString('hex')
const iv = crypto.randomBytes(16).toString('hex')

function encrypt (text) {
  let cipher = crypto.createCipheriv(algorithm, password, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  let tag = cipher.getAuthTag()

  return {
    data: encrypted,
    tag
  }
}

function decrypt (encrypted) {
  let decipher = crypto.createDecipheriv(algorithm, password, iv)
  decipher.setAuthTag(encrypted.tag)
  let deciphered = decipher.update(encrypted.data, 'hex', 'utf-8')
  deciphered += decipher.final('utf-8')
  return deciphered
}

const phrase = process.argv[2]
const enc = encrypt(phrase)
console.log(`Encrypted text: ${enc.data} with tag ${enc.tag.toString('hex')}`)
console.log(`Deciphered text: ${decrypt(enc)}`)