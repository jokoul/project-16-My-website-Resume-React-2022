require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const contactRoute = require("./route/contactRoute");

//we create a new express application and put in the constance "app"
const app = express();

//Use helmet to protect against vulnerability
app.use(helmet());

//creating the middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

//Deployement with Heroku
if (process.env.NODE_ENV === "production") {
  //we create a "build" folder in "client"
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, console.log("server listening to port 5000 only!"));
