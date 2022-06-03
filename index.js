const badPasswords = require('./passwords.json')

module.exports = isBadPassword = (password) => badPasswords.includes(password)
