import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import fetchBooks from "../../api/fetchBooks";
import emptyBook from "../../img/empty_book.jpeg";
import isLoadingLoupe from "../../img/isLoadingLoupe.gif";
import {
  authorFilter,
  titleFilter,
} from "../../helpers/BooksFilters/bookListFilters";
import {
  clearBooksData,
  getMoreBooksPending,
  getMoreBooksSuccess,
  setBooksFailure,
  setBooksPending,
  setBooksSuccess,
  setTotalItems,
} from "../../store/slices/booksSlice";
import MainComponent from "../MainComponent/index";
import {
  BookWrapper,
  BookCard,
  BookCardTitle,
  BookCardImg,
  BookCardCategory,
  BookCardAuthor,
  ShowMoreBtn,
  LoadingSVGWrapper,
  TotalBooksCount,
} from "./styled";
import UpBtn from "../../helpers/UI/UpBtn";

const Books = () => {
  const { search, category, order } = useSelector((state) => state.search);
  const { books, totalItems, error, isLoading, isLoadingButton } = useSelector(
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
        const totalCount = booksResult.totalItemsCount;
        const booksList = booksResult.mappedBooksResult;
        dispatch(setBooksSuccess(booksList));
        dispatch(setTotalItems(totalCount));
      } catch (e) {
        dispatch(setBooksFailure());
      }
    };

    if (search) {
      getBooks();
    }
  }, [search, category, order]);

  const showMoreHandler = () => {
    const nextIndex = startIndex + 30;
    setStartIndex(nextIndex);

    const getBooks = async () => {
      dispatch(getMoreBooksPending());
      try {
        const booksResult = await fetchBooks(
          search,
          category,
          order,
          nextIndex,
        );
        dispatch(getMoreBooksSuccess(booksResult.mappedBooksResult));
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
      {books.length ? (
        <TotalBooksCount>Found {totalItems} results</TotalBooksCount>
      ) : (
        ""
      )}
      {search && !books.length ? (
        <TotalBooksCount>Found {totalItems} result</TotalBooksCount>
      ) : (
        ""
      )}
      <BookWrapper>
        {!books.length && !search ? (
          <MainComponent />
        ) : (
          books.map((book) => {
            return (
              <BookCard key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <BookCardImg src={book.image ? book.image : emptyBook} />
                </Link>
                <BookCardCategory>{book.category}</BookCardCategory>
                <BookCardTitle>{titleFilter(book.title)}</BookCardTitle>
                <BookCardAuthor>{authorFilter(book.author)}</BookCardAuthor>
              </BookCard>
            );
          })
        )}
      </BookWrapper>
      {books.length > 0 && (
        <>
          <UpBtn />
          <ShowMoreBtn onClick={showMoreHandler} type="button">
            {isLoadingButton ? "Loading..." : "Show more"}
          </ShowMoreBtn>
        </>
      )}
    </>
  );
};

export default Books;
