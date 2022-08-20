# Figures
We have 3 types of figures: triangles, circles and rectangles. 
У нас есть 3 типа фигур: треугольники, круги и прямоугольники.

Write an interface `Figure` and 3 classes implementing it so that every figure 
has:

Напишите интерфейс `Рисунок` и реализуйте его 3 класса, чтобы каждая фигура
имеет:
- a `shape` (`triangle`, `circle` or `rectangle`);
- a `color` (`red`, `green` or `blue`);
- a method `getArea` that returns the area of the figure rounded down to 
hundredths.

- «форма» («треугольник», «круг» или «прямоугольник»);
- «цвет» («красный», «зеленый» или «синий»);
- метод `getArea`, возвращающий площадь фигуры, округленную в меньшую сторону до
сотые.
In addition to a `color` constructors should accept required data:
- sides `a`, `b` and `c` for a triangle;
- a `radius` for a circle;
- a `width` and a `height` for a rectangle.

В дополнение к `color` конструкторы должны принимать необходимые данные:
- стороны `a`, `b` и `c` для треугольника;
- `радиус` для окружности;
- ширина и высота прямоугольника.
The constructors should `throw new Error('your error message')` if:
- any length is <= 0
- the longest side of a triangle is >= than a sum of two others
Конструкторы должны выдавать новую ошибку ("ваше сообщение об ошибке"), если:
- любая длина <= 0
- самая длинная сторона треугольника >= суммы двух других
Hints:
- use `Math.PI` for calculating a circle square
- use [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula) for triangles

Example:
```typescript
new Rectangle('blue', 2, 0) // throws an error
new Triangle('red', 1, 2, 3) // throws an error: sides 1, 2 and 3 can't form a triangle
```

Also create a function `getInfo` that takes a figure and returns a string in the
next format:
Также создайте функцию `getInfo`, которая принимает число и возвращает строку в
следующий формат:
```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';
```
