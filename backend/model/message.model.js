import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const idofmessage = mongoose.model("Dataid", messageSchema);

export default idofmessage;
