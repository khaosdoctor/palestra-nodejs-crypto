const jwt = require('jsonwebtoken')
const secret = require('crypto').randomBytes(16).toString('hex')

let token = jwt.sign({ data: process.argv[2], secret: secret }, secret)

console.log(token)