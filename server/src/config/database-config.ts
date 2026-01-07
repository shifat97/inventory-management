import mongoose from "mongoose";
import "dotenv/config";

const URI: string | undefined = process.env.MONGO_URI;

const connectDB = async (): Promise<void> => {
  try {
    if (!URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error occurred while connecting to MongoDB");
    }
  }
};

export { connectDB };
