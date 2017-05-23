// PAGE --------------------------
export function updatePage(page) {
    return {
        type: 'UPDATE_PAGE',
        page: page
    }
}

// BOOKS -------------------------

// this would not be needed, but for now it's here because we aren't using a DB.
// these actions should not be mutable
let nextBookId = 1;
export function addBook(book) {
    return {
        type: 'ADD_BOOK',
        id : nextBookId++,
        title: book.title,
        author: book.author,
        description: book.description
    }
}

export function removeBook(bookId) {
    return {
        type: 'REMOVE_BOOK',
        bookId: bookId
    }
}