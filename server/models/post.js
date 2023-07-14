const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    photo: {
      type: String,
      require: true,
      default:
        "https://www.google.com.hk/imgres?imgurl=https%3A%2F%2Fclimate.onep.go.th%2Fwp-content%2Fuploads%2F2020%2F01%2Fdefault-image.jpg&tbnid=NfE8TAjA2ODYnM&vet=12ahUKEwiVyp3ulfr_AhVsNkQIHfYQBx8QMygBegUIARDAAQ..i&imgrefurl=https%3A%2F%2Fclimate.onep.go.th%2Fwp-content%2Fuploads%2F2020%2F01%2F&docid=Eh_frbRje_4DLM&w=800&h=600&q=default%20image&ved=2ahUKEwiVyp3ulfr_AhVsNkQIHfYQBx8QMygBegUIARDAAQ",
    },
    likers: { type: [String], default: [] },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = {
  PostModel,
};
