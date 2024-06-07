import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js' 
import cors from 'cors'
import userRoute from './route/user.route.js';
const app = express();

app.use(cors())
app.use(express.json())
dotenv.config();

const port=process.env.PORT || 3000
const URI=process.env.MongoDBURI

// Mongodb Connection
try{
    mongoose.connect(URI);
    console.log("MongoDB connection successfull");
} catch(error){
    console.log(error,"connection failed");
}

// defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})