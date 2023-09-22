import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import fetchBooks from "../../api/fetchBooks";
import emptyBook from "../../img/empty_book.jpeg";
import {
  authorFilter,
  titleFilter,
} from "../../helpers/BooksFunc/bookListFilters";
import {
  clearBooksData,
  getMoreBooks,
  setBooksData,
} from "../../store/slices/booksSlice";
import {
  BookWrapper,
  BookCard,
  BookCardTitle,
  BookCardImg,
  BookCardCategory,
  BookCardAuthor,
  ShowMoreBtn,
} from "./styled";

const Books = () => {
  const searchData = useSelector((state) => state.search.search);
  const categoryData = useSelector((state) => state.search.category);
  const orderData = useSelector((state) => state.search.order);
  const books = useSelector((state) => state.books.books);

  const [startIndex, setStartIndex] = useState(0);
  const [requestError, setRequestError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = async () => {
      dispatch(clearBooksData());
      try {
        const booksResult = await fetchBooks(
          searchData,
          categoryData,
          orderData,
        );
        dispatch(setBooksData(booksResult));
        setRequestError(false);
      } catch (e) {
        setRequestError(e.message);
        dispatch(clearBooksData());
      }
    };

    if (searchData) {
      getBooks();
    }
  }, [searchData, categoryData, orderData]);

  const showMoreHandler = () => {
    setStartIndex((prevstate) => prevstate + 30);
    const getBooks = async () => {
      try {
        const booksResult = await fetchBooks(
          searchData,
          categoryData,
          orderData,
          startIndex,
        );
        dispatch(getMoreBooks(booksResult));
      } catch (e) {
        dispatch(clearBooksData());
      }
    };
    getBooks();
  };

  return (
    <>
      {requestError ? (
        <p>Something went wrong. Try again later</p>
      ) : (
        <BookWrapper>
          {!books.length ? (
            <p>Enter some key word for searching</p>
          ) : (
            books.map((book) => {
              return (
                <BookCard key={book.id}>
                  <BookCardImg src={book.image ? book.image : emptyBook} />
                  <BookCardCategory>{book.category}</BookCardCategory>
                  <BookCardTitle>{titleFilter(book.title)}</BookCardTitle>
                  <BookCardAuthor>{authorFilter(book.author)}</BookCardAuthor>
                </BookCard>
              );
            })
          )}
        </BookWrapper>
      )}
      {books.length > 0 && (
        <ShowMoreBtn onClick={showMoreHandler} type="button">
          Show more
        </ShowMoreBtn>
      )}
    </>
  );
};

export default Books;
