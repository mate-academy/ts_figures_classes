enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

function roundToHundreths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0) {
      throw new Error('Side a should be positive!');
    }

    if (b <= 0) {
      throw new Error('Side b should be positive!');
    }

    if (c <= 0) {
      throw new Error('Side c should be positive!');
    }

    let longestSide = a >= b ? a : b;

    longestSide = c >= longestSide ? c : longestSide;

    if (longestSide >= a + b + c - longestSide) {
      throw new Error('The longest side is longer than a sum of two others!');
    }

    this.shape = Shape.Triangle;
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return roundToHundreths(
      Math.sqrt(
        semiperimeter *
          (semiperimeter - this.a) *
          (semiperimeter - this.b) *
          (semiperimeter - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive!');
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return roundToHundreths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width should be positive!');
    }

    if (height <= 0) {
      throw new Error('Height should be positive!');
    }

    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return roundToHundreths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return 'A ' + figure.color + ' ' + figure.shape + ' - ' + figure.getArea();
}
