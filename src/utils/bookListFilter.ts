import {BookItem} from '../services/BookService.types';

export const bookListFilter = (bookList: BookItem[], searchTerm: string) => {
  if (searchTerm === '') {
    return bookList;
  }

  return bookList.filter(book => {
    const clearSearchTerm = removeAccent(searchTerm);
    const clearBookTitle = removeAccent(book.title);
    const clearAllBookSubjects = book.subject.map(subject =>
      removeAccent(subject),
    );

    const bookTitleHasSearchTerm = clearBookTitle.includes(clearSearchTerm);

    const subjectContainsSearchTerm = clearAllBookSubjects.reduce(
      (prev, curr) => {
        return prev || curr.includes(clearSearchTerm);
      },
      false,
    );

    return bookTitleHasSearchTerm || subjectContainsSearchTerm;
  });
};

const removeAccent = (str: string) => {
  let text = str;
  text = text.toString().toLowerCase();
  text = text.replace(/[ÁÀÂÃáàâã]/gi, 'a');
  text = text.replace(/[ÉÈÊéèê]/gi, 'a');
  text = text.replace(/[ÍÌÎíìî]/gi, 'a');
  text = text.replace(/[ÓÒÔÕóòôõ]/gi, 'a');
  text = text.replace(/[ÚÙÛúùû]/gi, 'a');
  return text;
};
