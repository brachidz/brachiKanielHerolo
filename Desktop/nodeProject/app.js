const express = require("express");
// const mongoose = require("mongoose");
// const router = require("./routes/Router");
// const bodyParser = require("body-parser")
// const dotenv = require("dotenv");
// dotenv.config();
// const jwt = require("jsonwebtoken");
const app = express();

// mongoose.connect(process.env.DB_CONNECT,
//     {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log("connected");
//     }).catch((err) => {
//         console.log(`error connecting ${err}`);
//     });

// app.use(bodyParser.json())

// app.use('/', function (req, res, next) {
//     if (!req.path.startsWith('/sign')) {
//         try {
//             jwt.verify(req.headers['authorization'], process.env.SECRET);
//         } catch (err) {
//             res.send({"message":"not login"});
//         }
//     }
//     next();
// });

// app.use("/", router);

app.listen(4000,()=>{
    console.log("the port listen 4000!!!!!!")
})