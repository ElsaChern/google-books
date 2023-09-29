import styled from "styled-components";

const SingleBookWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px;
  align-items: stretch;

  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BookImage = styled.img`
  height: 400px;
  width: 300px;
  margin: 5px 35px;
  box-shadow: 10px 10px 20px black;

  @media only screen and (max-width: 960px) {
    height: 300px;
    width: 200px;
  }
`;

const InfoBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  @media only screen and (max-width: 1250px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 660px) {
    font-size: 18px;
  }
`;

const BookAuthor = styled.p`
  width: 800px;
  font-weight: 300;
  font-size: 15px;
  font-style: italic;
  line-height: 20px;
  color: gray;

  @media only screen and (max-width: 1250px) {
    width: 900px;
  }

  @media only screen and (max-width: 960px) {
    width: 600px;
  }

  @media only screen and (max-width: 660px) {
    width: 350px;
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`;

const BookDescription = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  width: 800px;

  @media only screen and (max-width: 1250px) {
    width: 900px;
  }

  @media only screen and (max-width: 960px) {
    width: 600px;
  }

  @media only screen and (max-width: 660px) {
    width: 350px;
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    width: 250px;
  }
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

  @media only screen and (max-width: 450px) {
    width: 150px;
    padding: 8px;
  }
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
