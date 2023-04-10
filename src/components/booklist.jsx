import './booklist.scss';

const booksList = [
  {
    category: 'Action',
    Title: 'The Hunger Games',
    Author: 'Suzanne Collins',
    percentage: 64,
    Chapter: 'Chapter 17',
  },
  {
    category: 'Science Fiction',
    Title: 'Dune',
    Author: 'Frank Herbert',
    percentage: 8,
    Chapter: 'Chapter 3, "A Lesson Learned"',
  },
  {
    category: 'Economy',
    Title: 'Capital in the Twenty-First Century',
    Author: 'Suzanne Collins',
    percentage: 0,
    Chapter: 'Introduction',
  },
];

const BookList = () => (
  <>
    {booksList.map((book) => (
      <div key={book.Title} className="container booklist mt-3">
        <div className="row width">
          <div className="col col-6">
            <h6>{book.category}</h6>
            <h4 className="top">{book.Title}</h4>
            <h6 className="top-second">{book.Author}</h6>
            <ul className="mt-3">
              <li>Comments&emsp;</li>
              <div className="vertical" />
              <li>&emsp;Remove&emsp;</li>
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
            <button className="btn" type="button" onClick={() => alert('Button Clicked')}>
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default BookList;
