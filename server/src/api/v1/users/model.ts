const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
 {
  // Defaulted userId: Date.now() + UUIDv4 striped of dashes, but dash between date and uuid.
  _id: {
   type: String,
   required: true,
   default: uuidv4(),
  },
  firstName: {
   type: String,
   required: [true, `First name is required`],
   trim: true,
  },
  lastName: {
   type: String,
   required: [true, `Last name is required`],
   trim: true,
  },
  profilePhoto: {
   type: String,
  },
  email: {
   type: String,
   required: [true, `Email is required`],
   unique: true,
   lowercase: true,
   trim: true,
   validate: [validator.isEmail, `Please provide a valid email`],
  },
  username: {
   type: String,
   unique: true,
   lowercase: true,
   trim: true,
  },
  hashedPassword: {
   type: String,
   required: true,
  },
  verified: {
   type: Boolean,
   default: false,
  },
  userRole: {
   type: String,
   required: [true, `User role is required`],
   default: "User",
  },
  refreshToken: {
   // This token is a JWT.
   type: String,
   default: "",
   // required: true,
  },
  resetToken: {
   // This token is a JWT.
   type: String,
   default: "",
   // required: true,
  },
  subscription: {
   type: String,
   default: "Free",
  },
  creditsUsed: {
   type: Number,
   default: 0,
  },
  creditsRemaining: {
   type: Number,
   default: 100,
  },
  // usage: {
  // This is a Developer API account example of rate limiting
  //  date: { type: Date, default: Date.now() },
  //  count: { type: Number, default: 0 },
  // },
 },
 { timestamps: true },
 { collection: "users" },
 { versionKey: false }
);

const UserExtraSchema = new mongoose.Schema(
 {
  // Defaulted userId: Date.now() + UUIDv4 striped of dashes, but dash between date and uuid.
  _id: {
   type: String,
   ref: "Users",
   default: uuidv4(),
  },

  refreshToken: {
   // This token is a JWT.
   type: String,
   default: "",
   // required: true,
  },
  resetToken: {
   // This token is a JWT.
   type: String,
   default: "",
   // required: true,
  },
  subscription: {
   type: String,
   default: "Free",
  },
  creditsUsed: {
   type: Number,
   default: 0,
  },
  creditsRemaining: {
   type: Number,
   default: 100,
  },
 },
 { timestamps: true },
 { collection: "users" },
 { versionKey: false }
);

const UserPreferencesSchema = new mongoose.Schema(
 {
  userId: {
   type: String,
   required: true,
   ref: "Users",
  },
  theme: {
   type: String,
   default: "light",
  },
  language: {
   type: String,
   default: "en",
  },
  notificationSettings: {
   emailNotifications: {
    type: Boolean,
    default: true,
   },
   smsNotifications: {
    type: Boolean,
    default: false,
   },
  },
 },
 { timestamps: true }
);

const UserSessionSchema = new mongoose.Schema(
 {
  userId: {
   type: String,
   ref: "Users",
   default: null, // null for anonymous users
  },
  sessionId: {
   type: String,
   required: true,
   default: uuidv4(),
  },
  ipAddress: {
   type: String,
   required: true,
  },
  userAgent: {
   type: String,
   required: true,
  },
  loginTime: {
   type: Date,
   default: Date.now,
  },
  logoutTime: {
   type: Date,
  },
  isAnonymous: {
   type: Boolean,
   default: false,
  },
 },
 { timestamps: true }
);

const UserInteractionSchema = new mongoose.Schema(
 {
  userId: {
   type: String,
   ref: "Users",
   default: null, // null for anonymous users
  },
  interactionType: {
   type: String,
   required: true,
  },
  interactionDetails: {
   type: mongoose.Schema.Types.Mixed,
   required: true,
  },
  timestamp: {
   type: Date,
   default: Date.now,
  },
 },
 { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
const UserPreferencesModel = mongoose.model(
 "UserPreferences",
 UserPreferencesSchema,
 "user_pref"
);
const UserSessionModel = mongoose.model(
 "UserSessions",
 UserSessionSchema,
 "user_sessions"
);

const UserInteractionModel = mongoose.model(
 "UserInteractions",
 UserInteractionSchema,
 "user_interactions"
);

module.exports = {
 UserModel,
 UserPreferencesModel,
 UserSessionModel,
 UserInteractionModel,
};
