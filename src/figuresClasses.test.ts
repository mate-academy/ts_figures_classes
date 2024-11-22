import { Triangle, Rectangle, Circle, getInfo } from './figuresClasses';

describe('Class "Triangle"', () => {
  test('should be declared', () => {
    expect(Triangle)
      .toBeInstanceOf(Function);
  });

  test('should create an instance of class Triangle', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle)
      .toBeInstanceOf(Triangle);
  });

  test('should have a public property "shape"', () => {
    const triangle = new Triangle('green', 3, 4, 5);
  
    expect(triangle)
      .toHaveProperty('shape');
  });

  test('should have a public property "color"', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle)
      .toHaveProperty('color');
  });

  test('should check whether all sides are positive numbers', () => {
    expect(() => {
      new Triangle('green', 0, 2, 2);
    }).toThrow(Error);
  });

  test('should check whether it is a triangle', () => {
    expect(() => {
      new Triangle('green', 5, 10, 15);
    }).toThrow(Error);
  });

  test('should have a method "getArea"', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle.getArea)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getArea" of class "Triangle"', () => {
  test('should return a number', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(typeof triangle.getArea())
      .toBe('number');
  });

  test('should return a correct square of a triangle', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle.getArea())
      .toBe(6);
  });
});

describe('Class "Circle"', () => {
  test('should be declared', () => {
    expect(Circle)
      .toBeInstanceOf(Function);
  });

  test('should create an instance of class Circle', () => {
    const circle = new Circle('red', 6);

    expect(circle)
      .toBeInstanceOf(Circle);
  });

  test('should have a public property "shape"', () => {
    const circle = new Circle('red', 6);

    expect(circle)
      .toHaveProperty('shape');
  });

  test('should have a public property "color"', () => {
    const circle = new Circle('red', 6);

    expect(circle)
      .toHaveProperty('color');
  });

  test('should check whether radius is a positive number', () => {
    expect(() => {
      new Circle('red', -3);
    }).toThrow(Error);
  });

  test('should have a method "getArea"', () => {
    const circle = new Circle('red', 6);

    expect(circle.getArea)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getArea" of class "Circle"', () => {
  test('should return a number', () => {
    const circle = new Circle('red', 6);

    expect(typeof circle.getArea())
      .toBe('number');
  });

  test('should return a correct square of a circle', () => {
    const circle = new Circle('red', 6);

    expect(circle.getArea())
      .toBe(113.09);
  });
});

describe('Class "Rectangle"', () => {
  test('should be declared', () => {
    expect(Rectangle)
      .toBeInstanceOf(Function);
  });

  test('should create an instance of class Rectangle', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle)
      .toBeInstanceOf(Rectangle);
  });

  test('should have a public property "shape"', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle)
      .toHaveProperty('shape');
  });

  test('should have a public property "color"', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle)
      .toHaveProperty('color');
  });

  test('should check whether all sides are positive numbers', () => {
    expect(() => {
      new Rectangle('blue', 5, -1);
    }).toThrow(Error);
  });

  test('should have a method "getArea"', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle.getArea)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getArea" of class "Rectangle"', () => {
  test('should return a number', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(typeof rectangle.getArea())
      .toBe('number');
  });

  test('should return a correct square of a rectangle', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle.getArea())
      .toBe(80);
  });
});

describe('Function "getInfo"', () => {
  test('should be declared', () => {
    expect(getInfo)
      .toBeInstanceOf(Function);
  });

  test('should return a string', () => {
    const blueTriangle = new Triangle('blue', 6, 7, 8);

    expect(typeof getInfo(blueTriangle))
      .toBe('string');
  });

  test('should return correct information about a triangle', () => {
    const redTriangle = new Triangle('red', 10, 12, 15);

    expect(getInfo(redTriangle))
      .toBe('A red triangle - 59.81');
  });

  test('should return correct information about a circle', () => {
    const greenCircle = new Circle('green', 13.31);

    expect(getInfo(greenCircle))
      .toBe('A green circle - 556.55');
  });

  test('should return correct information about a rectangle', () => {
    const blueRectangle = new Rectangle('blue', 9, 17);

    expect(getInfo(blueRectangle))
      .toBe('A blue rectangle - 153');
  });
});
