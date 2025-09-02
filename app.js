const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

//middleware
app.use(express.json());

//routes
const apiRoute = require("./routes/index");
app.use("/api", apiRoute);

mongoose
  .connect(
    "mongodb+srv://rajputumesh117:15UhHTS6qDLwGDQs@cluster0.kub9kbc.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`locaton : http://localhost:${PORT}`);
});
