
// 12) а) Создать класс Товар, имеющий переменные имя, цена, рейтинг.+
// б) Создать класс Категория, имеющий переменные имя и массив товаров.
// Создать несколько объектов класса Категория.
// в) Создать класс Basket, содержащий массив купленных товаров.
// г) Создать класс User, содержащий логин, пароль и объект класса Basket.
// Создать объект класса User. (Интернет магазин)

class Product {

	constructor(name, price, rating) {
		this.name = name;
		this.price = price;
		this.rating = rating;
	}
}

class Category {

	constructor(name, products) {
		this.name = name;
		this.products = products;
	}
}
