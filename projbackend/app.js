require('dotenv').config()
const mongoose = require('mongoose');

const express = require('express');

const app = express();  
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");


//DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB Connected");
});


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//Routes
app.use("/api",authRoutes);



//Port
const port = process.env.PORT || 8000;


//Starting a Server
app.listen(port, ()=>{
    console.log(`app is running in ${port}`);
});