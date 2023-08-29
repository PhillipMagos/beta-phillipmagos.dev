import mongoose from "mongoose";
// Contact Page
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("db connected to test page");
        }
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;