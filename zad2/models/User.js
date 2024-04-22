class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return [
            new User(1, 'Bartek'),
            new User(2, 'Jakub'),
            new User(3, 'Piotrek'),
            new User(4, 'Oskar'),
            new User(5, 'Patrycja')
        ];
    }
}

module.exports = User;
