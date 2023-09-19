import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import fetchBooks from "../../api/fetchBooks";
import emptyBook from "../../img/empty_book.jpeg";
import {
  authorFilter,
  titleFilter,
} from "../../helpers/BooksFunc/bookListFilters";
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
  const [requestError, setRequestError] = useState("");

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
      } catch (e) {
        setRequestError(e.message);
        setBooks([]);
      }
    };

    if (searchData) {
      getBooks();
    }
  }, [searchData, categoryData, orderData]);

  return (
    <div>
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
      {books.length > 0 && <button type="button">Show more</button>}
    </div>
  );
};

export default Books;
