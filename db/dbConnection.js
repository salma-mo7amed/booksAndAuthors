// import modules:
import mongoose from "mongoose";

export const connectDB = ()=>{
 mongoose.connect("mongodb://localhost:27017/booksAndAuthors").then(() => {
     console.log("database connected successfully.");
   }).catch((err) => {
     console.log("failed to connect to database.");
   });
}