import { Schema } from "express-validator"

const registerSchema: Schema = {
 firstName: {
  isAlpha: { errorMessage: "First name must contain only letters" },
  notEmpty: { errorMessage: "First name is required" },
 },
 lastName: {
  isAlpha: { errorMessage: "Last name must contain only letters" },
  notEmpty: { errorMessage: "Last name is required" },
 },
 email: {
  isEmail: { errorMessage: "Must be a valid e-mail address" },
  notEmpty: { errorMessage: "Email is required" },
 },
 password: {
  isString: {
   errorMessage: "Password must be strong (minLength: 8, uppercase, number, symbol required)",
  },
  isLength: { options: { min: 8 } }
 }
}

const loginSchema: Schema = {
 email: {
  isEmail: { errorMessage: "Must be a valid e-mail address" },
  notEmpty: { errorMessage: "Email is required" },
 },
 password: {
  isString: { errorMessage: "Password must be a string" },
  notEmpty: { errorMessage: "Password is required" },
 },
};

const forgotPasswordSchema: Schema = {
 email: {
  isEmail: { errorMessage: "Must be a valid e-mail address" },
  notEmpty: { errorMessage: "Email is required" },
 }
};

const resetPasswordSchema: Schema = {
 password: {
  isString: {
   errorMessage: "Password must be strong (minLength: 8, uppercase, number, symbol required)",
  },
  isLength: { options: { min: 8 } }
 },
 confirmation: {
  isString: {
   errorMessage: "Password must be strong (minLength: 8, uppercase, number, symbol required)",
  },
  isLength: { options: { min: 8 } }
 }
};

const otpSchema: Schema = {
 otp: {
  isNumeric: {
   errorMessage: "OTP is a 6 digit numeric value. Please check your email or request again."
  },
  isLength: { options: { max: 6, min: 6 } }
 }
}

const apiKeySchema: Schema = {
 
}

export const authSchemas = {
 register: registerSchema,
 login: loginSchema,
 forgotPassword: forgotPasswordSchema,
 resetPassword: resetPasswordSchema,
 otp: otpSchema
};