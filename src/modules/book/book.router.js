// import modules:
import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getPaginatedBooks, getSearchBooks, getSpecificBook, updateBook } from "./book.controller.js";
// create router:
const bookRouter = Router();
// add a book:
bookRouter.post('/', addBook);
// get all books:
bookRouter.get('/', getAllBooks);
// get paginated books:
bookRouter.get('/book', getPaginatedBooks)
// get a specific book:
bookRouter.get('/:id', getSpecificBook);
// update a book:
bookRouter.patch('/:id', updateBook);
// delete a book:
bookRouter.delete('/:id', deleteBook);
// get filtered book:
bookRouter.get('/search/:key',getSearchBooks);

// export
export default bookRouter