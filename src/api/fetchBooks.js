import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

const searchUrl = "/volumes";

const fetchBooks = async (search, subject, orderBy, startIndex = 0) => {
  const maxResults = 30;
  const query = subject === "" ? search : `${search}+${subject}`;
  const params = {
    q: query,
    orderBy,
    startIndex,
    maxResults,
    key: apiKey,
  };

  const response = await apiInstance.get(searchUrl, { params });
  const books = response?.data?.items || [];

  const totalItemsCount = response?.data?.totalItems;
  const mappedBooksResult = books.map(({ id, volumeInfo }) => ({
    id,
    image: volumeInfo.imageLinks?.thumbnail,
    category: volumeInfo.categories
      ? volumeInfo.categories
      : "Category is not found",
    title: volumeInfo.title,
    author: volumeInfo.authors,
    description: volumeInfo.description ? volumeInfo.description : "",
  }));

  return { totalItemsCount, mappedBooksResult };
};

export default fetchBooks;
