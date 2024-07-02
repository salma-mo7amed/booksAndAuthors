import { Author } from "../../../db/models/author.model.js";

// add an author:
export const addAuthor = async(req, res, next)=>{
// get data from req:
const {name, bio, birthDate, books} = req.body;
// prepare author:
const author = new Author({
    name, 
    bio,
    birthDate,
    books 

});
author.birthDate instanceof Date
const createdAuthor = (await author.save())
return res.status(201).json({message:'Author created successfully.', data:createdAuthor, success:true})
}
// get all authors:
export const getAllAuthors = async (req, res, next)=>{
    const authors = await Author.find().populate('books', 'title -_id')
    res.status(200).json({success:true, data:authors})
};
// get a specific author:
export const getSpecificAuthor = async (req, res, next)=>{
     const {id} = req.params;
    const author = await Author.findById(id).populate("books", "title -_id");
    res.status(200).json({success:true, data:author})
};
// update an author:
export const updateAuthor = async (req, res, next)=>{
 const { id } = req.params;
 const { name, bio, birthDate, books } = req.body;
 const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {new:true})
 res.status(200).json({message:'Author updated successfully.', data:updatedAuthor, success:true})

};
// delete an author:
export const deleteAuthor = async (req, res, next)=>{
 const { id } = req.params;
 const { name, bio, birthDate, books } = req.body;
 await Author.findByIdAndDelete(id, req.body)
 res.status(200).json({message:'Author deleted successfully.',  success:true})
};
// search filter for authors:
export const getSearchAuthors = async (req, res, next)=>{
    const filteredAuthor = await Author.find({
      $or: [
        { name: { $regex: req.params.key } },
        { bio: { $regex: req.params.key } },
      ],
    }).populate("books", "title -_id");
    res.status(200).json({success:true, data:filteredAuthor})
};
// GET paginated books:
export const getPaginatedAuthors = async(req, res, next)=>{
  const page = req.query.p || 0
  const authorsPerPage = 3
  const paginatedAuthors = await Author.find()
    .populate("books", "title -_id")
    .skip(page * authorsPerPage)
    .limit(authorsPerPage)
    res.status(200).json({ success: true, data: paginatedAuthors });

}

