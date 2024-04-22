class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    borrow() {
        this.available = false;
    }

    return() {
        this.available = true;
    }

    static getAll() {
        
    }
}

module.exports = Book;
