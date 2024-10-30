// index.js is the main entry point for our backend
// import all the files here

import connectDB from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // app.on("error", (error) => {
    //   console.log("ERR: ", error);
    //   throw error;
    // });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed", err);
  });
