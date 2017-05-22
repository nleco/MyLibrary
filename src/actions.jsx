// Library actions
export const ACTION_UPDATE_PAGE = 'UPDATE_PAGE';
export const ACTION_ADD_BOOK = 'ADD_BOOK';
export const ACTION_REMOVE_BOOK = 'REMOVE_BOOK';


export function updatePage(page) {
    return {
        type: ACTION_UPDATE_PAGE,
        page: page
    }
}

let nextBookId = 1;
export function addBook(book) {
    return {
        type: ACTION_ADD_BOOK,
        book: {
            id: nextBookId++,
            title: book.title,
            author: book.author,
            description: book.description
        }
    }
}

export function removeBook(bookId) {
    return {
        type: ACTION_REMOVE_BOOK,
        bookId: bookId
    }
}