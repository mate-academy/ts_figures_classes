/* eslint-disable max-len */

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

  test('should have a method "getSquare"', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle.getSquare)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getSquare" of class "Triangle"', () => {
  test('should return a number', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(typeof triangle.getSquare())
      .toBe('number');
  });

  test('should return a correct square of a triangle', () => {
    const triangle = new Triangle('green', 3, 4, 5);

    expect(triangle.getSquare())
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

  test('should have a method "getSquare"', () => {
    const circle = new Circle('red', 6);

    expect(circle.getSquare)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getSquare" of class "Circle"', () => {
  test('should return a number', () => {
    const circle = new Circle('red', 6);

    expect(typeof circle.getSquare())
      .toBe('number');
  });

  test('should return a correct square of a circle', () => {
    const circle = new Circle('red', 6);

    expect(circle.getSquare())
      .toBe(113.04);
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

  test('should have a method "getSquare"', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle.getSquare)
      .toBeInstanceOf(Function);
  });
});

describe('Method "getSquare" of class "Rectangle"', () => {
  test('should return a number', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(typeof rectangle.getSquare())
      .toBe('number');
  });

  test('should return a correct square of a rectangle', () => {
    const rectangle = new Rectangle('blue', 8, 10);

    expect(rectangle.getSquare())
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
      .toBe('A green circle - 556.27');
  });

  test('should return correct information about a rectangle', () => {
    const blueRectangle = new Rectangle('blue', 9, 17);

    expect(getInfo(blueRectangle))
      .toBe('A blue rectangle - 153');
  });
});
