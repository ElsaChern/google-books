/* eslint-disable */
import { useState, useEffect } from "react";
import fetchBooks from "../../../api/fetchBooks";
import { useSelector } from "react-redux";
import {
  BookWrapper,
  BookCard,
  BookCardTitle,
  BookCardImg,
  BookCardCategory,
  BookCardAuthor,
} from "./styled";

const Books = () => {
  const searchData = useSelector((state) => state.search.search);
  const categoryData = useSelector((state) => state.search.category);
  const orderData = useSelector((state) => state.search.order);

  const [books, setBooks] = useState([]);
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksResult = await fetchBooks(
          searchData,
          categoryData,
          orderData,
        );
        setBooks(booksResult);
        setRequestError(false);
      } catch {
        setRequestError(true);
        setBooks([]);
      }
    };

    if (searchData) {
      getBooks();
    }
  }, [searchData, categoryData, orderData]);

  return (
    <>
      {requestError ? (
        <p>Something went wrong. Try again later</p>
      ) : (
        <BookWrapper>
          {!books.length ? (
            <p>Enter some key word for searching</p>
          ) : (
            books.map((book, id) => {
              return (
                <BookCard key={id}>
                  <BookCardImg src={book.image}></BookCardImg>
                  <BookCardCategory>{book.category}</BookCardCategory>
                  <BookCardTitle>
                    {book.title.length > 30
                      ? `${book.title.slice(0, 30)}...`
                      : book.title}
                  </BookCardTitle>
                  <BookCardAuthor>{book.author}</BookCardAuthor>
                </BookCard>
              );
            })
          )}
        </BookWrapper>
      )}
    </>
  );
};

export default Books;
