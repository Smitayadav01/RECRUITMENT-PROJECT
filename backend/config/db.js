import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    console.log("Connecting to MongoDB URI:", mongoURI);

    if (!mongoURI) {
      console.error('MongoDB URI is not set!');
      process.exit(1);
    }

    await mongoose.connect(mongoURI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
