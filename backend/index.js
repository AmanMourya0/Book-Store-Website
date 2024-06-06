import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
const app = express();

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})