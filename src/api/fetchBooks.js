import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

const searchUrl = "/volumes";

const fetchBooks = async (
  search,
  // subject,
  orderBy = "relevance",
  startIndex = 0,
) => {
  const maxResults = 30;
  // const query = subject === "all" ? search : `${search}+subject:${subject}`;
  const params = {
    q: search,
    orderBy,
    startIndex,
    maxResults,
    key: apiKey,
  };

  const response = await apiInstance.get(searchUrl, { params });
  const books = response?.data?.items || [];

  const mappedBooksResult = books.map(({ id, volumeInfo }) => ({
    id,
    image: volumeInfo.imageLinks
      ? volumeInfo.imageLinks.thumbnail
      : "Photo not found",
    category: volumeInfo.categories
      ? volumeInfo.categories
      : "Category is not found",
    title: volumeInfo.title,
    author: volumeInfo.authors ? volumeInfo.authors : "Author is not found",
    description: volumeInfo.description ? volumeInfo.description : "",
  }));

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return mappedBooksResult;
};

export default fetchBooks;
