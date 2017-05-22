export function updatePage(page) {
    return {
        type: 'UPDATE_PAGE',
        page: page
    }
}

let nextBookId = 1;
export function addBook(book) {
    return {
        type: 'ADD_BOOK',
        book
    }
}

export function removeBook(bookId) {
    return {
        type: 'REMOVE_BOOK',
        bookId: bookId
    }
}