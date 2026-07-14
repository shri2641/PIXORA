import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  
  if (process.env.MONGODB_URI) {
    await mongoose.connect(`${process.env.MONGODB_URI}/pixora`);
  } else {
    console.log("No MONGODB_URI found, starting in-memory database...");
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
  }
};

export default connectDB;