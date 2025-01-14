import mongoose from "mongoose";

const connectDb = async() =>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Sever is connected : ${conn.connection.host}`);
    }
    catch(error){
      console.error(`MONGO CANNOT BE CONNECTED ${ error.message}`);
      process.exit(1);
    }
}

export default connectDb
