# Figures
We have 3 types of figures: triangles, circles and rectangles.

Write an interface `Figure` and 3 classes implementing it so that every figure
has:
- a `shape` (`triangle`, `circle` or `rectangle`);
- a `color` (`red`, `green` or `blue`);
- a method `getArea` that returns the area of the figure rounded down to
hundredths.

In addition to a `color` constructors should accept required data:
- sides `a`, `b` and `c` for a triangle;
- a `radius` for a circle;
- a `width` and a `height` for a rectangle.

The constructors should `throw new Error('your error message')` if:
- any length is <= 0
- the longest side of a triangle is >= than a sum of two others

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
```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';
```
