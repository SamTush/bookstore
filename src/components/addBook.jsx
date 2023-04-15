import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import './addBook.scss';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    dispatch(fetchBooks());
    event.preventDefault();
    const title = event.target.bookTitle.value;
    const author = event.target.author.value;
    const category = event.target[2].options[event.target[2].selectedIndex].text;
    const itemId = nanoid();

    dispatch(addBook({
      title,
      author,
      item_id: itemId,
      category,
    }));
    event.target.reset();
    console.log(category);
  };

  return (
    <div className="add-book">
      <h4>ADD NEW BOOK</h4>
      <form className="row g-3 mt-2" onSubmit={handleFormSubmit}>
        <div className="col-6">
          <input type="text" className="form-control" id="book-title" name="bookTitle" placeholder="Book Title" required />
        </div>
        <div className="col-4" hidden>
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" />
        </div>
        <div className="col-4">
          <select className="form-control" name="category">
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
