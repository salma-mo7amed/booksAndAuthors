// import modules:
import { Schema, model } from "mongoose";
// schema:
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedDate:{
        type:Date
       
    }
  },
  {
    timestamps: true,
  }
);
// model:
export const Book = model('Book', bookSchema)