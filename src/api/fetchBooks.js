import apiInstance from "./apiInstance";

const apiKey = process.env.REACT_APP_BOOKS_API_KEY;

const searchUrl = "/volumes";

const fetchBooks = async (search, subject, orderBy, startIndex = 0) => {
  const maxResults = 30;
  const query = subject === "all" ? search : `${search}+subject:${subject}`;
  const params = {
    key: apiKey,
    q: query,
    orderBy,
    startIndex,
    maxResults,
  };

  const response = await apiInstance.get(searchUrl, { params });
  const books = response.data.items || [];

  const reduceMappedResult = (result) => {
    const mappedBooksResult = result.map(({ book }) => ({
      id: books.id,
      length: book.totalItems.length,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "Photo not found",
      category: book.volumeInfo.categories[0],
      title: book.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : "",
    }));

    return mappedBooksResult.reduce((newObj, objInArray) => {
      return {
        ...newObj,
        [objInArray.id]: objInArray,
      };
    }, {});
  };

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return reduceMappedResult(books);
};

export default fetchBooks;
