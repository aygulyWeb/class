// 1) Класс Phone.
// a) Создайте класс Phone, который содержит переменные number, model и weight.+
// б) Создайте три экземпляра этого класса. +
// в) Выведите на консоль значения их переменных. +
// г) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего.
//  Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. 
//  Вызвать эти методы для каждого из объектов.+
// д) Добавить конструктор в класс Phone, который принимает на вход три параметра 
// для инициализации переменных класса - number, model и weight. 
// е) Добавить конструктор, который принимает на вход два параметра
//  для инициализации переменных класса - number, model. 
// ж) Добавить конструктор без параметров.
// з) Вызвать из конструктора с тремя параметрами конструктор с двумя. 
// и) Добавьте перегруженный метод receiveCall, который принимает 
// два параметра - имя звонящего и номер телефона звонящего. Вызвать этот метод.
// к) Создать метод sendMessageс аргументами переменной длины. 
// Данный метод принимает на вход номера телефонов, которым будет отправлено сообщение. 
// Метод выводит на консоль номера этих телефонов.

class Phone {

	constructor(number, model, weight) {
		this.number = number;
		this.model = model;
		this.weight = weight;
	}

	getInfo() {
		return `Номер телефона: ${this.number}  Марка телефона: ${this.model} Вес телефона: ${this.weight}`;
	}

	receiveCall(name) {
		return `Звонит ${name}`;
	}
	getNumber() {
		return this.number;
	}


}

let phone1 = new Phone(7144844, 'samsung', 52);
let phone2 = new Phone(7144848, 'iphone', 64);
let phone3 = new Phone(7144846, 'huawei', 70);

console.log(phone1.getInfo());
console.log(phone2.getInfo());
console.log(phone3.getInfo());

console.log(phone1.receiveCall("John"));
console.log(phone1.getNumber());

console.log(phone2.receiveCall("Sarah"));
console.log(phone2.getNumber());

console.log(phone3.receiveCall("Bell"));
console.log(phone3.getNumber());

