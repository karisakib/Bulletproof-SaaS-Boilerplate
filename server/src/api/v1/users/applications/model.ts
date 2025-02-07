const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator")

const ApplicationsSchema = new mongoose.Schema(
 {
  // Defaulted userId: Date.now() + UUIDv4 striped of dashes, but dash between date and uuid.
  _id: {
   type: String,
   required: true,
   default: uuidv4(),
  },
  platform: {
   type: String,
   required: [true, `Job board or platform name is required.`],
   trim: true
  },
  jobTitle: {
   type: String,
   required: [true, `Job title is required.`],
   trim: true
  },
  jobPostingAgency: {
   type: String,
   required: false,
   trim: true
  },
  jobPostingAgent: {
   type: String,
   required: false,
   trim: true
  },
  jobDescription: {
   type: String,
   required: true,
   trim: true
  },
 },
 { timestamps: true },
 { collection: "applications" },
 { versionKey: false }
);

const ApplicationsModel = mongoose.model("Applications", ApplicationsSchema, "applications");

module.exports = ApplicationsModel;
