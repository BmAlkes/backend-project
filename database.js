const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://bmalkes:${process.env.DB_PASSWORD}@cluster0.jtaxdoi.mongodb.net`
    )
    .then(() => console.log("DB is up"))
    .catch((err) => console.log(err));
};

module.exports = connectToDataBase;
