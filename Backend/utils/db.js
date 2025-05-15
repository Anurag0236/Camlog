require("dotenv").config();

const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
console.log("🔑 Connecting to DB URI:", URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection successful to DB");
  } catch (error) {
    console.error("❌ Database connection fail:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
