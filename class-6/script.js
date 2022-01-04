
// 6) Создайте пример наследования, реализуйте класс Student и класс Aspirant,
// аспирант отличается от студента наличием некой научной работы.+

// а) Класс Student содержит переменные: String firstName, lastName, group.
//  А также double averageMark, содержащую среднюю оценку.+

// б) Создать переменную типа Student, которая ссылается на объект типа Aspirant.

// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии.
//  Если средняя оценка студента равна 5, то сумма 100 грн, иначе 80.
// Переопределить этот метод в классе Aspirant.
// Если средняя оценка аспиранта равна 5, то сумма 200 грн, иначе 180.

// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant.
// Вызвать метод getScholarship() для каждого элемента массива. 

class Student {

	constructor(firstName, lastName, group, averageMark) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.group = group;
		this.averageMark = averageMark;
	}

	getScholarship() {
		return this.averageMark == 5 ? 100 : 80;
	}
}

class Aspirant extends Student {
	constructor(firstName, lastName, group, averageMark, degree) {
		super(firstName, lastName, group, averageMark);
		this.degree = degree;

	}
	getScholarship() {
		return this.averageMark == 5 ? 200 : 180;
	}

}

let info1 = new Student('Jonh', 'Smith', 708, 5);

let info2 = new Aspirant('Данил', 'Петров', 777, 5);

console.log(info1.getScholarship());

console.log(info2.getScholarship());