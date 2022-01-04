
// 11) Создайте суперкласс Shape и его наследники Circle, Rectangle.+
// Класс Shape содержит абстрактный метод draw() и переменную хранящую цвет.+
// Классы Circle, Rectangle содержат координаты точек.
// Создать массив содержащий эти фигуры.
// В цикле нарисовать их (вызвать метод draw).
// Добавить метод equals() для классов Shape, Circle, Rectangle.

class Shape {

	constructor(color) {
		this.color = color;
	}
	draw() {

	}
}

class Circle extends Shape {

	constructor(color, coordinate) {
		super(color);
		this.coordinate = coordinate;
	}

}
class Retangle extends Shape {

	constructor(color, coordinate) {
		super(color);
		this.coordinate = coordinate;
	}

}