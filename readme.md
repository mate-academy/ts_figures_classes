# Figures
We have 3 types of figures: triangles, circles and rectangles. 

Write an interface `Figure` and 3 classes implementing it so that every figure 
has:
- a `shape` (`triangle`, `circle` or `rectangle`);
- a color (`red`, `green` or `blue`);
- a method `getSquare` that returns the square of the figure rounded down to 
hundredths.

In addition to a color, constructors should accept required data:
- sides `a`, `b` and `c` for a triangle;
- a `radius` for a circle;
- a `width` and a `height` for a rectangle.

Also create a function `getInfo` that takes a figure and returns a string in the
next format:
```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redSquare) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';
```
