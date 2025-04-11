function generateUsername(firstName, lastName, number) {
 const username = lastName + firstName.split("")[0]
 return `${username}`
}

module.exports = generateUsername