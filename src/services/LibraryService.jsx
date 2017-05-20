// NOTE: this was quick and dirty, just to fake a service.

const _ = require('lodash');

const nextBookId = 4;
const data = {
    books : [
        {
            id : 1,
            title : 'A Great Book',
            author : 'Awesome McGee',
            isbn : 'IBS7000000',
            description : 'A story about a hero that is the best in the world.',
            pages : 100
        },
        {
            id : 2,
            title : 'The Printing Diaries',
            author : 'Leroy Blue',
            isbn : 'STO6000600',
            description : 'A story of how to print, especially in a diary.',
            pages : 200
        },
        {
            id : 3,
            title : 'The Archers Shot',
            author : 'Joaquin Hernandez',
            isbn : 'UTS7009800',
            description : 'A story on how a man shot a 3D animal with just one arrow',
            pages : 1
        }
    ]
};

export default class LibraryService {
    // Delete a book from your library
    static deleteBooks(bookIds) {
        const books = data['books'];

        bookIds.forEach((bookId) => {
            books = _.filter(books, {id: bookId});
        });

        return bookIds;
    }

    // Add a book to your library
    static addBook(title, author, isbn, description, pages) {
        
        const books = data['books'];
        const id = nextBookId;
        nextBookId = nextBookId + 1;
        
        const book = {
            id: id,
            title : title,
            
        };

        books.push(book);

        return book;
    }

    // Get a book
    static getBookById(bookId) {
        const books = data['books'];
        
        return _.find(books, function(o) { return o.id === bookId; });
    }

    static getAllBooks() {
        return data['books'];
    }
}