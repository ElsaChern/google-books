const authorFilter = (arrAuthors) => {
  if (arrAuthors?.length > 1) {
    return `${arrAuthors[0]} and others...`;
  }
  if (arrAuthors?.join().length > 30) {
    return `${arrAuthors.join().slice(0, 35)}...`;
  }
  if (arrAuthors === undefined) {
    return `Author is not found`;
  }
  return arrAuthors;
};

const titleFilter = (bookTitle) => {
  if (bookTitle?.length > 30) {
    return `${bookTitle.slice(0, 30)}...`;
  }
  return bookTitle;
};

const categoryFilter = (bookCategory) => {
  if (bookCategory === undefined) {
    return `Category is not found`;
  }
  return bookCategory;
};

export { authorFilter, titleFilter, categoryFilter };
