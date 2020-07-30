import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add new Book, MusicALbum, Movie -> success', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));

  expect(cart.items.length).toBe(3);
});

test('Добавить два одинаковых товара -> success', () => {
  const cart = new Cart();  
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));

  expect(cart.items.length).toBe(1);
  expect(cart.getSum()).toBe(1000);
});

test('Получить сумму без учёта скидки', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));
  cart.add(new Movie(2001, 'Avengers2', 'Joss Whedon', 1000, 137));

  expect(cart.getSum()).toBe(2000);
})

test('Получить сумму без учёта скидки, первый товар', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));

  expect(cart.getSum()).toBe(1000);
})

test('Получить сумму c учётом скидки 5%, первый товар', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));

  expect(cart.getSumWithDiscount(5)).toBe(950);
})

test('Получить сумму c учётом скидки 5%', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));
  cart.add(new Movie(2001, 'Avengers2', 'Joss Whedon', 1000, 137));

  expect(cart.getSumWithDiscount(5)).toBe(1900);
})

test('Удалить товар из корзины. Добавим два товара, удалим один -> остаток - один товар', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));
  cart.add(new Movie(2001, 'Avengers2', 'Joss Whedon', 1000, 137));
  cart.deleteItem(2000);

  expect(cart.items.length).toBe(1);
})

test('Удалить не существующий товар из корзины - false', () => {
  const cart = new Cart();
  cart.add(new Movie(2000, 'Avengers', 'Joss Whedon', 1000, 137));
  cart.add(new Movie(2001, 'Avengers2', 'Joss Whedon', 1000, 137));
  
  expect(() => {cart.deleteItem(3000)}).toThrow();
})




