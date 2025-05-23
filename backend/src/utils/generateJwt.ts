import jwt from "jsonwebtoken"

const { JWT_KEY, JWT_EXPIRY } = process.env;

export const generateJwt = async (
  tokenData,
  tokenKey = JWT_KEY,
  expiresIn = JWT_EXPIRY
) => {
  try {
    const token = jwt.sign(tokenData, tokenKey, { expiresIn: expiresIn });
    return token;
  } catch (error) {
    throw Error("Error signing JWT.");
  }
};