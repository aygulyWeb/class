
// 4) Определить класс Reader, хранящий такую информацию о пользователе библиотеки:
// ФИО, номер читательского билета, факультет, дата рождения, телефон.+
// Методы takeBook(), returnBook().+
// Разработать программу, в которой создается массив объектов данного класса.

// Перегрузить методы takeBook(), returnBook():
// - takeBook, который будет принимать количество взятых книг.
// Выводит на консоль сообщение "Петров В. В. взял 3 книги".
// - takeBook, который будет принимать переменное количество названий книг.
// Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
// - takeBook, который будет принимать переменное количество объектов класса Book (создать новый класс, содержащий имя и автора книги).
// Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".

//  Аналогичным образом перегрузить метод returnBook().
// Выводит на консоль сообщение "Петров В. В. вернул книги:
// Приключения, Словарь, Энциклопедия". Или  "Петров В. В. вернул 3 книги".

class Reader {

	constructor(fullName, numTicket, faculty, born, phone) {
		this.fullName = fullName;
		this.numTicket = numTicket;
		this.faculty = faculty;
		this.born = born;
		this.phone = phone;
	}

	takeBook() {
		return `${this.fullName} взял 3 книги`;
	}
	returnBook() {
		return `${this.fullName} вернул 3 книги`;
	}
}

class Book extends Reader {

	constructor(fullName, numTicket, faculty, born, phone, nameBook, author) {
		super(fullName, numTicket, faculty, born, phone);
		this.nameBook = nameBook;
		this.author = author;
	}
	takeBook() {
		return `${this.fullName} взял книги: ${this.nameBook}`;
	}

	returnBook() {
		return `${this.fullName} вернул книги: ${this.nameBook}`;
	}
}

let info1 = new Reader('Петров.В.В', 55, 'Русс.лит', 1999, 7777475);
let info2 = new Book('Петров.В.В', 55, 'Русс.лит', 1999, 7777475, ['Приключение', 'Словарь', 'Энциклопедия'], 'Автор1');

console.log(info1.takeBook());

console.log(info2.takeBook());

console.log(info1.returnBook());

console.log(info2.returnBook());