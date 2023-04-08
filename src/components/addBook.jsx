import './addBook.scss';

const AddBook = () => (
  <div className="add-book">
    <h4>ADD NEW BOOK</h4>
    <form className="row g-3 mt-2">
      <div className="col-6">
        <input type="text" className="form-control" id="inputPassword2" placeholder="Book Title" />
      </div>
      <div className="col-4">
        <select className="form-control">
          <option selected value="Action">Action</option>
          <option value="mango">Science Fiction</option>
          <option value="lime">Economy</option>
        </select>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">ADD BOOK</button>
      </div>
    </form>
  </div>
);

export default AddBook;
