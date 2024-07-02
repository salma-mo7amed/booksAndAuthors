import { Book } from "../../../db/models/book.model.js";


// add a book:
export const addBook = async (req, res, next)=>{
    // get data from req:
   try{
     const {title, content, author, publishedDate} = req.body;
    // prepare book:
    const book = new Book({
        title, 
        content,
        author,
        publishedDate
    });
    book.publishedDate instanceof Date
    // book.markModified('publishedDate')
  const createdBook = await book.save();
  return res.status(201).json({message:'book created successfully', data:createdBook, success:true})
   }catch(err){
     res.json({err})
   }

};
// get all books:
export const getAllBooks = async (req, res, next)=>{
    const Books = await Book.find()
    res.status(200).json({success:true, data:Books})
};
// get a specific book:
export const getSpecificBook = async (req, res, next)=>{
    const {id} = req.params;
    const book = await Book.findById(id);
    res.status(200).json({success:true, data:book})
};
// update a book:
export const updateBook = async(req, res, next)=>{
    const { id } = req.params;
 const { title, content, author, publishedDate } = req.body;
 const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new:true})
 res.status(200).json({message:'book updated successfully.', data:updatedBook, success:true})


};
// delete a book:
export const deleteBook = async (req, res, next)=>{
  const { id } = req.params;
 const { title, content, author, publishedDate } = req.body;
  await Book.findByIdAndDelete(id, req.body)
 res.status(200).json({message:'book deleted successfully.',  success:true})
};
// search filter for books:
export const getSearchBooks = async (req, res, next)=>{
  const filteredBook = await Book.find({
    $or: [
      { title: { $regex: req.params.key } },
      { author: { $regex: req.params.key } }
    ],
  });
  res.status(200).json({success:true, data:filteredBook })
}
// GET paginated books:
export const getPaginatedBooks = async(req, res, next)=>{
  const page = req.query.p || 0
  const booksPerPage = 3
  const paginatedBooks = await Book.find().skip(page * booksPerPage).limit(booksPerPage)
  res.status(200).json({success:true, data:paginatedBooks})

}