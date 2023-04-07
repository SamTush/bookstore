import './books.scss';
import BookList from './booklist';

const Books = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col col-12 book-details">
          <BookList />
        </div>
        <div className="col col-12 add-books">
          <h1>ADD NEW BOOK</h1>
        </div>
      </div>
    </div>
  </>
);

export default Books;
