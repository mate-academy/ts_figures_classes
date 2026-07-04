# Figures

We have 3 types of figures: triangles, circles and rectangles.

## Requirements

* ✅ Create an interface `Figure`
* ✅ Create `Triangle`, `Circle`, and `Rectangle` classes implementing `Figure`
* ✅ Every figure has a `shape`
* ✅ Every figure has a `color`
* ✅ Every figure has a `getArea()` method
* ✅ Return the area rounded **down** to hundredths

### Constructors

* ✅ `Triangle` accepts sides `a`, `b`, and `c`
* ✅ `Circle` accepts a `radius`
* ✅ `Rectangle` accepts a `width` and a `height`

### Validation

* ✅ Throw an `Error` if any length is less than or equal to `0`
* ✅ Throw an `Error` if the triangle sides cannot form a valid triangle

### Implementation Details

* ✅ Use `Math.PI` to calculate the area of a circle
* ✅ Use **Heron's formula** to calculate the area of a triangle

### `getInfo`

* ✅ Create a `getInfo` function
* ✅ Return a string in the format:

```typescript
const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle); // 'A red rectangle - 15'

const greenCircle = new Circle('green', 1);
getInfo(greenCircle); // 'A green circle - 3.14'
```
