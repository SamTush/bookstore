import './booklist.scss';

const BookList = () => (
  <>
    <div className="container booklist">
      <div className="row width">
        <div className="col col-6">
          <h6>Action</h6>
          <h4 className="top">The Hunger Games</h4>
          <h6 className="top-second">Suzanne Collins</h6>
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
            <progress className="progress" value="75" min="0" max="100">64%</progress>
          </div>
          <div>
            <p className="percent ms-2">64%</p>
            <p className="top-complete ms-2">Completed</p>
          </div>
          <div className="vertical-two" />
        </div>
        <div className="col col-3 button-div">
          <h6>CURRENT CHAPTER</h6>
          <h6>Chapter 17</h6>
          <button className="btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </>
);

export default BookList;
