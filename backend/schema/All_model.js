import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);

// Academic Details Schema
const academicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    institution: {
      type: String,
      required: true,
      trim: true,
    },
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    marks: {
      type: String,
      required: true,
      trim: true,
    },
    yearOfPassing: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 10,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for better query performance
academicSchema.index({ userId: 1, username: 1 });

export const Academic = mongoose.model("Academic", academicSchema);

// Internship Details Schema
const internshipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.fromDate;
        },
        message: "To date must be after from date",
      },
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index
internshipSchema.index({ userId: 1, username: 1 });

export const Internship = mongoose.model("Internship", internshipSchema);

// Work Experience Details Schema
const workExperienceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.fromDate;
        },
        message: "To date must be after from date",
      },
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    isCurrentJob: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index
workExperienceSchema.index({ userId: 1, username: 1 });

export const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);

// Certificates Schema
const certificateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    certificate: {
      type: String,
      required: true,
      trim: true,
    },
    domain: {
      type: String,
      required: true,
      trim: true,
    },
    issuedDate: {
      type: Date,
      default: Date.now,
    },
    expiryDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return !value || value > this.issuedDate;
        },
        message: "Expiry date must be after issued date",
      },
    },
    certificateUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index
certificateSchema.index({ userId: 1, username: 1 });

export const Certificate = mongoose.model("Certificate", certificateSchema);

// Skills Schema
const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skill: {
      type: String,
      required: true,
      trim: true,
    },
    proficiency: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Beginner",
    },
    category: {
      type: String,
      trim: true,
      default: "General",
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
      max: 50,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index
skillSchema.index({ userId: 1, username: 1 });
// Prevent duplicate skills for same user
skillSchema.index({ userId: 1, skill: 1 }, { unique: true });

export const Skill = mongoose.model("Skill", skillSchema);


