import styled from "styled-components";

const BookWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BookCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  margin: 15px;
  padding: 15px;
  list-style: none;
  box-shadow: 1px 1px 10px rgba(51, 51, 51, 0.15);
`;

const BookCardImg = styled.img`
  width: 130px;
  height: 170px;
  margin: 5px 35px;
  box-shadow: 10px 10px 20px black;
`;

const BookCardCategory = styled.p`
  font-weight: 300;
  font-size: 13px;
  text-decoration: underline;
  font-style: italic;
  line-height: 14px;
  text-align: start;
  color: gray;
`;

const BookCardTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: start;
  color: black;
  margin: 0;
`;

const BookCardAuthor = styled.p`
  font-weight: 300;
  font-size: 14px;
  font-style: italic;
  line-height: 14px;
  text-align: start;
  color: gray;
  margin: 0;
`;

export {
  BookWrapper,
  BookCardCategory,
  BookCard,
  BookCardImg,
  BookCardAuthor,
  BookCardTitle,
};
