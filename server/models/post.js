const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    photo: {
      type: String,
      require: false,
      default: "https://images3.alphacoders.com/131/1314382.png",
    },
    likers: { type: [String], default: [] },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = {
  PostModel,
};
