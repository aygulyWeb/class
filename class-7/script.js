// 7) Создать класс Car в пакете com.company.vehicles, 
//Engine в пакете com.company.details и Driver в пакете com.company.professions.

// Класс Driver содержит поля - ФИО, стаж вождения.
// Класс Engine содержит поля - мощность, производитель.
// Класс Car содержит поля - марка автомобиля, класс автомобиля, вес, водитель типа Driver, мотор типа Engine.

// Методы start(), stop(), turnRight(), turnLeft(), которые выводят на печать: 
//"Поехали", "Останавливаемся", "Поворот направо" или "Поворот налево". 

// А также метод printInfo(), который выводит полную информацию об автомобиле, ее водителе и моторе. 

// Создать производный от Car класс  - Lorry (грузовик), характеризуемый также грузоподъемностью кузова. 
// Создать производный от Car класс - SportCar, характеризуемый также предельной скоростью. 
// Пусть класс Driver расширяет класс Person.


class Car {

	constructor(mark, carСlas, weight, type, motor) {
		this.mark = mark;
		this.carСlas = carСlas;
		this.weight = weight;
		this.type = type;
		this.motor = motor;
	}
	start() {
		return `Поехали`;

	}
	stop() {
		return `Останавливаемся`;

	}
	turnRight() {
		return `Поворот направо`;

	}
	turnLeft() {
		return `Поворот налево`;

	}

	printInfo() {
		return `марка автомобиля: ${this.mark} 
				класс автомобиля: ${this.carСlas} 
				вес: ${this.weight}`;
	}
}

class Driver extends Car {

	constructor(mark, carСlas, weight, type, motor, fullName, drivingExperience) {
		super(mark, carСlas, weight, type, motor);
		this.fullName = fullName;
		this.drivingExperience = drivingExperience;
	}
	printInfo() {
		return `Водитель: ${this.fullName} \nСтаж вождения: ${this.drivingExperience} лет`;
	}
}

class Engine extends Car {

	constructor(mark, carСlas, weight, type, motor, power, manufacturer) {
		super(mark, carСlas, weight, type, motor);
		this.power = power;
		this.manufacturer = manufacturer;
	}

	printInfo() {
		return `Мощность: ${this.power} \nПроизводитель: ${this.manufacturer}`;
	}
}

let infoCar = new Car('Mercedes', 'S', 950, 'Водитель', 'Мотор');

let infoDriver = new Driver('Mercedes', 'S', 950, 'Водитель', 'Мотор', 'Петров.В', 12);

let infoEngine = new Engine('Mercedes', 'S', 950, 'Водитель', 'Мотор', 500, 'Mers');

console.log(infoCar.printInfo());

console.log(infoCar.start());
console.log(infoCar.stop());
console.log(infoCar.turnRight());
console.log(infoCar.turnLeft());

console.log(infoDriver.printInfo());
console.log(infoEngine.printInfo());



