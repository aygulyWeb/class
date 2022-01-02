
// 2)  Создать класс Person, который содержит: 
// a) поля fullName, age. 
// б) методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то  Person говорит". 
// в) Добавьте два конструктора  - Person() и Person(fullName, age).
// Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).


class Person {

	constructor(fullName, age) {
		this.fullName = fullName;
		this.age = age;
	}

	move() {
		return `такой-то ${this.fullName} говорит`;
	}
	talk() {
		return `такой-то ${this.fullName} говорит`;
	}

}

let personName1 = new Person('John');
console.log(personName1.move());

let personName2 = new Person('Sarah');
console.log(personName2.talk());

console.log(Person.FULLNAME);
console.log(Person.AGE);



