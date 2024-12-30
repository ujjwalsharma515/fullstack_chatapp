import mongoose from "mongoose";



export const connectDB = async () => {
  try {

    const conn = await mongoose.connect("mongodb+srv://user2002:attack2611@cluster0.slxyr.mongodb.net/db_name?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
