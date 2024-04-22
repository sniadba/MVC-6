class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return [
            new Book(1, 'Pan Tadeusz', 'Adam Mickiewicz', 1834),
            new Book(2, 'Ferdydurke', 'Witold Gombrowicz', 1937),
            new Book(3, 'Quo Vadis', 'Henryk Sienkiewicz', 1896),
            new Book(4, 'Nad Niemnem', 'Eliza Orzeszkowa', 1888),
            new Book(5, 'Mały Książe', ' Antoine de Saint', 1943)
        ];
    }
}

module.exports = Book;
