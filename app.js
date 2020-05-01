const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Auth = require("./routes/auth");

// Initializing Express App
const app = express();


// Constants
let PORT = process.env.PORT || 4000;
let DATABASE_URL = process.env.DATABASE_URL;


// DB Connection
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log("Connection to DB failed")
    }else{
        console.log("DB connection Successfull")
    }
    
});

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api",Auth);





// App listening
app.listen(4000,() => {
    console.log("App listening on port 4000");
})