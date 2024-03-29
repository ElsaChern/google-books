import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import emptyBook from "../../../img/empty_book.jpeg";
import {
  BookAuthor,
  BookCategory,
  BookDescription,
  BookImage,
  BookTitle,
  GoBackBtn,
  InfoBookWrapper,
  SingleBookWrapper,
} from "./styled";

const Book = () => {
  const books = useSelector((state) => state.books.books);
  const navigate = useNavigate();
  const { id } = useParams();

  const currentBook = books.find((e) => e.id === id);

  useEffect(() => {
    if (books?.length === 0) {
      navigate(`/`);
    }
  }, [books]);

  const authors = currentBook?.author;
  const image = currentBook?.image ? currentBook.image : emptyBook;
  const title = currentBook?.title;
  const category = currentBook?.category;
  const description = currentBook?.description ? currentBook?.description : "";

  const goBackHandle = () => {
    navigate(-1);
  };

  return (
    <>
      <SingleBookWrapper>
        <BookImage src={image} />
        <InfoBookWrapper>
          <BookCategory>{category}</BookCategory>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{authors}</BookAuthor>
          <BookDescription>{description}</BookDescription>
        </InfoBookWrapper>
      </SingleBookWrapper>
      <GoBackBtn onClick={goBackHandle}>Back</GoBackBtn>
    </>
  );
};

export default Book;
