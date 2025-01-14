import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    image:{
      type:String,
      required: true
    }
  },
  { timestamps: true }
);
const datamessage = mongoose.model("Message", messageSchema);

export default datamessage;
