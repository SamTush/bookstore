import './booklist.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      {books.map((book) => (
        <div key={book.item_id} className="container booklist mt-3">
          <div className="row width">
            <div className="col col-6">
              <h6>{book.category}</h6>
              <h4 className="top">{book.title}</h4>
              <h6 className="top-second">{book.author}</h6>
              <ul className="mt-3">
                <li>Comments&emsp;</li>
                <div className="vertical" />
                <li>
                  &emsp;
                  <button className="btn btn-outline-light" type="button" onClick={() => handleRemoveBook(book.item_id)}>
                    Remove
                  </button>
                  &emsp;
                </li>
                <div className="vertical" />
                <li>&emsp;Edit</li>
              </ul>
            </div>
            <div className="col col-3 progress-div">
              <div className="progress-bar">
                <progress className="progress" value={book.percentage} min="0" max="100">
                  {book.percentage}
                  %
                </progress>
              </div>
              <div>
                <p className="percent ms-2">
                  {book.percentage}
                  %
                </p>
                <p className="top-complete ms-2">Completed</p>
              </div>
              <div className="vertical-two" />
            </div>
            <div className="col col-3 button-div">
              <h6>CURRENT CHAPTER</h6>
              <h6>{book.Chapter}</h6>
              <button className="btn" type="button">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookList;
