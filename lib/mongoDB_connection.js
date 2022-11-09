const mongoose = require("mongoose");

Connect().catch((err) => console.log(err));

async function Connect() {
  const db = await mongoose.connect("mongodb://localhost:27017/mm16crud");
}
export default Connect;
