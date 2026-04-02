# Figures
<!-- # Фигуры -->

We have 3 types of figures: triangles, circles and rectangles.
<!-- У нас есть 3 типа фигур: треугольники, окружности и прямоугольники. -->

Write an interface `Figure` and 3 classes implementing it so that every figure
has:
<!-- Напиши интерфейс `Figure` и 3 класса, реализующих его, так чтобы каждая фигура имела: -->

- a `shape` (`triangle`, `circle` or `rectangle`);
  <!-- - поле `shape` (`triangle`, `circle` или `rectangle`); -->
- a `color` (`red`, `green` or `blue`);
  <!-- - поле `color` (`red`, `green` или `blue`); -->
- a method `getArea` that returns the area of the figure rounded down to
  hundredths.
  <!-- - метод `getArea`, возвращающий площадь фигуры, округлённую вниз до сотых. -->

In addition to a `color` constructors should accept required data:
<!-- Помимо `color`, конструкторы должны принимать обязательные данные: -->

- sides `a`, `b` and `c` for a triangle;
  <!-- - стороны `a`, `b` и `c` для треугольника; -->
- a `radius` for a circle;
  <!-- - `radius` (радиус) для окружности; -->
- a `width` and a `height` for a rectangle.
  <!-- - `width` (ширину) и `height` (высоту) для прямоугольника. -->

The constructors should `throw new Error('your error message')` if:
<!-- Конструкторы должны выбрасывать `throw new Error('сообщение об ошибке')` если: -->

- any length is <= 0
  <!-- - любая длина <= 0 -->
- the longest side of a triangle is >= than a sum of two others
  <!-- - наибольшая сторона треугольника >= суммы двух других -->

Hints:
<!-- Подсказки: -->

- use `Math.PI` for calculating a circle square
  <!-- - используй `Math.PI` для вычисления площади окружности -->
- use [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula) for triangles
  <!-- - используй [формулу Герона](https://en.wikipedia.org/wiki/Heron%27s_formula) для треугольников -->

Example:
<!-- Пример: -->

```typescript
new Rectangle('blue', 2, 0); // throws an error
new Triangle('red', 1, 2, 3); // throws an error: sides 1, 2 and 3 can't form a triangle
```

Also create a function `getInfo` that takes a figure and returns a string in the
next format:
<!-- Также создай функцию `getInfo`, которая принимает фигуру и возвращает строку в формате: -->

```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';
```
