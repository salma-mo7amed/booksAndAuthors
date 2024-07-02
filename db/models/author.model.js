// import modules:
import mongoose, { Schema, model } from "mongoose";
// schema
const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    books: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book"
      }
    ]
  },
  { timestamps: true }
);
// model
export const Author = model('Author', authorSchema);