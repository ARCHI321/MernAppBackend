
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const userRouter = require("./routes/userRoute");


app.use(express.json());

dotenv.config();

mongoose.connect(process.env.URI).
then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000 , (err) =>{
        if(err) console.log(err);

        console.log("running successfully at " , process.env.PORT);
    });
}).catch((error)=>{
    console.log("error",error);
});

// app.use("/api/user",userRouter);
app.use(userRouter);




