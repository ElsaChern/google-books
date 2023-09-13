/* eslint-disable */
import { useState } from "react";
import {
  BookWrapper,
  BookCard,
  BookCardTitle,
  BookCardImg,
  BookCardCategory,
  BookCardAuthor,
} from "./styled";
import fetchBooks from "../../../api/fetchBooks";
import { useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const booksResult = await fetchBooks("JS");
    setBooks(booksResult);
  };

  useEffect(() => {
    getBooks([]);
  }, []);

  console.log(books);

  return (
    <>
      <BookWrapper>
        {books.map((book) => {
          return (
            <BookCard key={book.id}>
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
        })}
      </BookWrapper>
    </>
  );
};

export default Books;
