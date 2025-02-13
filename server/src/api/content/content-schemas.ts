import { Schema } from "express-validator"

const getBlogSchema: Schema = {
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

const createBlogSchema: Schema = {
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

export const contentSchemas = {
 getPost: getBlogSchema,
 createPost: createBlogSchema,
};