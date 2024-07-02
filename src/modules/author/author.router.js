// import modules:
import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getPaginatedAuthors, getSearchAuthors, getSpecificAuthor, updateAuthor } from "./author.controller.js";
// create Router:
const authorRouter = Router();
// add an author:
authorRouter.post('/', addAuthor);
// get all authors:
authorRouter.get('/', getAllAuthors);
// get paginated books:
authorRouter.get('/author', getPaginatedAuthors)
// get a specific author:
authorRouter.get('/:id', getSpecificAuthor);
// update an author:
authorRouter.patch('/:id', updateAuthor);
// delete an author:
authorRouter.delete('/:id', deleteAuthor);
// get filtered author:
authorRouter.get('/search/:key', getSearchAuthors)
// 
// export
export default authorRouter 