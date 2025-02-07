const { v4: uuidv4 } = require("uuid");

/**
 * Grab user email from MongoDB and give user an API KEY if user is valid, does not have an API KEY, and is authorized to have an API KEY.
 * Note: Verification is beyond the scope of this function. This function ONLY generates the API KEY.
 * Recommended: Hash the API KEY with bcrypt and then store in the database.
 * @param {string} email
 * @returns {string} generatedApiKey
 */
const generateApiKey = async (email) => {
 try {

  // Concat user email with UUIDv4
  const preApiKey = email + uuidv4();

  // Pass new string to Buffer and encode it
  const generatedApiKey = Buffer.from(preApiKey).toString("base64");

  // Return the generated string
  return generatedApiKey;
 } catch (error) {
  throw Error(`Unable to generate API KEY. Check generateApiKey.js file.`);
 }
};

const t = generateApiKey("karisakib@gmail.com");
console.log(t);

module.exports = generateApiKey;
