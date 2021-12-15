import mongoose = require("mongoose");

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fantest", {});
    console.log("DB connected");
  } catch (e) {
    console.log("Error. No connected DB");
    console.log(e);
  }
}
