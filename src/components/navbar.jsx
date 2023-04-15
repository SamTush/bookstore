import { Link } from 'react-router-dom';
import './navbar.scss';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">Bookstore CMS</Link>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">BOOKS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </div>
          <FaUserAlt className="me-4" />
        </div>
      </nav>
    </>
  )
);

export default Navbar;
