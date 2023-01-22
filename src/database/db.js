import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait conecting to database!");
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://admin:ka9ddc123@cluster0.gwvrxna.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB Atlas Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
