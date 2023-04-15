import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UyJ1zfyvbSSugnL7GVUQ/books';

export const fetchBooks = createAsyncThunk('books.fetchBook', async () => {
  const response = await axios.get(APIurl);
  const bookList = Object.entries(response.data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return bookList;
});

export const addBook = createAsyncThunk('book/addBook', async (book) => {
  try {
    await axios.post(APIurl, book);
    const response = await fetchBooks();
    return response.payload;
  } catch {
    return 'Unable to add a book';
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (id) => {
  try {
    await axios.delete(`${APIurl}${id}`);
    return id;
  } catch {
    return 'Unable to delete';
  }
});

const initialState = {
  books: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => ({
      ...state, books: [...payload],
    }));
    builder.addCase(addBook.fulfilled, (state, { payload }) => ({
      ...state, books: [...state.books, payload],
    }));
    builder.addCase(removeBook.fulfilled, (state, { payload }) => ({
      ...state, books: state.books.filter((book) => book.Id !== payload),
    }));
  },
});

export default booksSlice.reducer;
