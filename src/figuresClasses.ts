enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  green = 'green',
  red = 'red',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color = Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid value! Please, write another positive number');
    }

    if (a + b <= c || c + b <= a || c + a <= b) {
      throw new Error('Incorrect value! Please, write another values');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const squareTr: number
    = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(squareTr * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Invalid value! Please, write another positive number');
    }
  }

  getArea(): number {
    const squareCircle = Math.PI * this.r ** 2;

    return Math.floor((squareCircle * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid value! Please, write another positive number');
    }
  }

  getArea(): number {
    const squareRec = this.width * this.height;

    return squareRec;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
