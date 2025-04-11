import { Schema } from "express-validator"

const createBlogSchema: Schema = {
 title: {
  isString: { errorMessage: "Title is required!" },
  notEmpty: { errorMessage: "Title is requied!" },
 },
 tagline: {
  isString: { errorMessage: "Tagline is required!" },
  notEmpty: { errorMessage: "Tagline is required!" },
 },
 tags: {
  isString: { errorMessage: "Tags must be comma-separated!" }
 },
 author: {
  isString: { errorMessage: "Author is required!" },
  notEmpty: { errorMessage: "Author is required!" },
 },
 content: {
  isString: { errorMessage: "Content is required!" },
  notEmpty: { errorMessage: "Content is required!" },
 }
}

export const contentSchemas = {
 createPost: createBlogSchema,
};