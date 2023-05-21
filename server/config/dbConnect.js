const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connect Successfully......");
  } catch (error) {
    console.log("Database Error.............", error);
  }
};

module.exports = dbConnect;
