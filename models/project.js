const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A project must have a title"],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      required: [true, "Please provide a project description"],
    },
    goal: {
      type: Number,
      required: [true, "Please set a funding goal"],
    },
    amountRaised: {
      type: Number,
      default: 0,
    },
    deadline: {
      type: Date,
      required: [true, "A project must have a deadline"],
    },
    category: {
      type: String,
      required: [true, "Please specify a category"],
      enum: ["Technology", "Creative", "Community", "Education"],
    },
    imageUrl: {
      type: String,
      required: [true, "An image URL is required for the campaign"],
    },
    owner: {
      type: String,
      // ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "funded", "expired"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
