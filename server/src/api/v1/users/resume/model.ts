const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator")

const ResumeSchema = new mongoose.Schema(
 {
  _id: {
   type: String,
   required: true,
   default: uuidv4(),
  },
  userId: {
   type: String,
   required: [true, `userId is required.`],
   trim: true
  },
  summary: {
   type: String,
   required: false,
   trim: true
  },
 },
 { timestamps: true },
 { collection: "resume" },
 { versionKey: false }
);

const ResumeModel = mongoose.model("Resume", ResumeSchema, "resume");

module.exports = ResumeModel;
