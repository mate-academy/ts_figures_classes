enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

function roundDownToHundredths(n: number): number {
  return Math.floor(n * 100) / 100;
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shapes.triangle;

    if (a <= 0 || b <= 0 || c <= 0 || c >= a + b) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const square: number = (this.a + this.b + this.c) / 2;

    return roundDownToHundredths(
      Math.sqrt(square * (square - this.a)
        * (square - this.b)
        * (square - this.c)),
    );
  }
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = Shapes.circle;

    if (radius <= 0) {
      throw new Error('radius doesn`t exist');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return roundDownToHundredths(square);
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = Shapes.rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error('sides 1, 2 can\'t form a rectangle');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
