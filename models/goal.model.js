const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    name: {
      type: String,
    },

    theme: {
      type: [String],
      enum: [
        "social",
        "work",
        "health",
        "beauty",
        "home",
        "friends",
        "sports",
        "food",
        "music",
        "travel",
        "love",
        "hobbies",
        "art",
      ],
    },
    content: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Content",
      },
    ],
    
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;