import './books.scss';
import BookList from './booklist';
import AddBook from './addBook';

const Books = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col col-12 book-details pb-4">
          <BookList />
        </div>
        <div className="col col-12 line-div">
          <hr className="hr" />
        </div>
        <div className="col col-12 add-books">
          <AddBook />
        </div>
      </div>
    </div>
  </>
);

export default Books;
