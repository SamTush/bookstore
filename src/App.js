import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
