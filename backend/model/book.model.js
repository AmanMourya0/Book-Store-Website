import mongoose from "mongoose";
const bookSchema= mongoose.Schema({
    "id":Number,
    "name":String,
    "title":String,
    "price":Number,
    "category":String,
    "image":String
})

const Book=mongoose.model("book",bookSchema);

export default Book;