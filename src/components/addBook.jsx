import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './addBook.scss';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.bookTitle.value;
    const author = event.target.author.value;
    dispatch(addBook({ title, author }));
    event.target.reset();
  };

  return (
    <div className="add-book">
      <h4>ADD NEW BOOK</h4>
      <form className="row g-3 mt-2" onSubmit={handleFormSubmit}>
        <div className="col-6">
          <input type="text" className="form-control" id="book-title" name="bookTitle" placeholder="Book Title" />
        </div>
        <div className="col-4">
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
