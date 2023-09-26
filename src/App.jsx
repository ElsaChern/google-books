import { Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";
import Book from "./components/Books/Book/Book";
import Books from "./components/Books";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route exact path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
};

export default App;
