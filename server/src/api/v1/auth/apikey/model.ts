const mongoose = require("mongoose");
const ApiKeySchema = new mongoose.Schema(
 {
  email: {
   type: String,
   required: true,
   unique: false,
  },
  apiKey: {
   type: String,
   // required: true,
   unique: true,
  },
 },
 { timestamps: true },
 { collection: "api_keys" },
 { versionKey: false }
);

const ApiKeyModel = mongoose.model("ApiKey", ApiKeySchema, "api_keys");

module.exports = ApiKeyModel;
