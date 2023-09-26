import styled from "styled-components";

const SingleBookWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px;
  align-items: stretch;
`;

const BookImage = styled.img`
  height: 400px;
  width: 300px;
  margin: 5px 35px;
  box-shadow: 10px 10px 20px black;
`;

const InfoBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px;
`;

const BookCategory = styled.p`
  font-weight: 300;
  font-size: 15px;
  text-decoration: underline;
  font-style: italic;
  line-height: 14px;
  text-align: start;
  color: gray;
`;

const BookTitle = styled.p`
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  color: black;
  margin: 5px;
`;

const BookAuthor = styled.p`
  font-weight: 300;
  font-size: 15px;
  font-style: italic;
  line-height: 20px;
  color: gray;
`;

const BookDescription = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  width: 800px;
`;

const GoBackBtn = styled.button`
  display: block;
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  margin: 20px auto;
  border: double;
  box-shadow: rgba(51, 51, 51, 0.15) 10px 10px 6px;
  color: black;
  font-size: 15px;
  margin: 20px auto;
  background-color: white;
  cursor: pointer;
`;

export {
  SingleBookWrapper,
  BookImage,
  InfoBookWrapper,
  BookCategory,
  BookTitle,
  BookAuthor,
  BookDescription,
  GoBackBtn,
};
