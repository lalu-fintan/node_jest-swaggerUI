import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.DB_URL ||
        "mongodb+srv://lalufintan:laluprasath02@cluster0.8hoswvt.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(connection.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
