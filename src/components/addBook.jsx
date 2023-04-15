import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import './addBook.scss';

const AddBook = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('Action');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.bookTitle.value;
    const author = event.target.author.value;
    const itemId = nanoid();

    await dispatch(addBook({
      title,
      author,
      item_id: itemId,
      category,
    })).unwrap();
    dispatch(fetchBooks());
    event.target.reset();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="add-book">
      <h4>ADD NEW BOOK</h4>
      <form className="row g-3 mt-2" onSubmit={handleFormSubmit}>
        <div className="col-4">
          <input type="text" className="form-control" id="book-title" name="bookTitle" placeholder="Book Title" />
        </div>
        <div className="col-3">
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" />
        </div>
        <div className="col-3">
          <select className="form-control" onChange={handleCategoryChange} value={category}>
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
