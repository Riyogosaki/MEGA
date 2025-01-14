import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    MessageData: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const  Userdata = mongoose.model("SendingMessage", messageSchema);

export default  Userdata ;
