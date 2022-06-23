// const express = require("express");
// const cors = require("cors");
// const app = express();
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

// // app.use(...);
// const db = require("./models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// // simple route 
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// // set port, listen for requests

// require("./routes/UserRoute.js")(app);

// app.get("/test",(req,res)=>{
//     console.log(req)
// })

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan')
// var mongoose = require('mongoose')
// const request = require("request");
// const axios = require('axios')
// const Instagram = require("instagram-web-api");
require('dotenv').config();


var app = express()

var port = process.env.PORT ||3001

// const instBaseUrl = process.env.INSTA_BASE_URL;
// const userId = process.env.USER_ID;
// const AccessToken = process.env.LONG_ACCESS_TOKEN;
// const { username, password } = process.env;
// const client = new Instagram({ username, password });

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(morgan('combined'))

var bodyParser = require("body-parser");
const { upload } = require('./uploadFiles');
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/",upload.single('lee'), (req, res) => {
    console.log(req);
  res.status(200).send("working fine")
})




app.listen(port, () => {
  console.log(`server is ready to port ${port}`)
})

module.exports = app


