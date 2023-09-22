/* eslint-disable */
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
  getMoreBooksPending,
  getMoreBooksSuccess,
  setBooksFailure,
  setBooksPending,
  setBooksSuccess,
} from "../../store/slices/booksSlice";
import {
  BookWrapper,
  BookCard,
  BookCardTitle,
  BookCardImg,
  BookCardCategory,
  BookCardAuthor,
  ShowMoreBtn,
  LoadingSVGWrapper,
} from "./styled";
import isLoadingLoupe from "../../img/isLoadingLoupe.gif";

const Books = () => {
  const { search, category, order } = useSelector((state) => state.search);
  const { books, error, isLoading, isLoadingButton } = useSelector(
    (state) => state.books,
  );
  const [startIndex, setStartIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = async () => {
      dispatch(setBooksPending());
      dispatch(clearBooksData());
      try {
        const booksResult = await fetchBooks(search, category, order);
        dispatch(setBooksSuccess(booksResult));
      } catch (e) {
        dispatch(setBooksFailure());
      }
    };

    if (search) {
      getBooks();
    }
  }, [search, category, order]);

  const showMoreHandler = () => {
    setStartIndex((prevstate) => prevstate + 30);
    const getBooks = async () => {
      dispatch(getMoreBooksPending());
      try {
        const booksResult = await fetchBooks(
          search,
          category,
          order,
          startIndex,
        );
        dispatch(getMoreBooksSuccess(booksResult));
      } catch (e) {
        dispatch(clearBooksData());
      }
    };
    getBooks();
  };

  if (error) {
    return <p>Something went wrong. Try again later</p>;
  }

  if (isLoading) {
    return (
      <LoadingSVGWrapper>
        <img src={isLoadingLoupe} alt="Loading..." />
      </LoadingSVGWrapper>
    );
  }

  return (
    <>
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
      {books.length > 0 && (
        <ShowMoreBtn onClick={showMoreHandler} type="button">
          {isLoadingButton ? "Loading..." : "Show more"}
        </ShowMoreBtn>
      )}
    </>
  );
};

export default Books;
