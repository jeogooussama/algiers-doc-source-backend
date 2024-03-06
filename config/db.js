const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const dbUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://admin:admin@algeraindocs.glgtmgk.mongodb.net/?retryWrites=true&w=majority&appName=AlgerainDocs";
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on connection error
  }
};

module.exports = connectToDatabase;
