type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be positive numbers');
    }

    if (Math.max(a, b, c) >= (a + b + c) - (Math.max(a, b, c))) {
      throw new Error(`sides ${a}, ${b} and ${c}`);
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const underTheRoot: number = semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c);
    const square: number = Math.sqrt(underTheRoot);

    return Math.floor(square * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be a positive numbers');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be a positive numbers');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
