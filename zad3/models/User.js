class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(bookId) {
        this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== bookId);
    }

    findBorrowedBookById(bookId) {
        return this.borrowedBooks.some(book => book.id === bookId);
    }

    static getAll() {
        
    }
}

module.exports = User;
