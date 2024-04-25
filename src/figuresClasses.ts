export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;

  getArea(): number;
}

export abstract class Shape implements Figure {
  readonly shape: Figure['shape'];

  readonly color: Figure['color'];

  constructor(shape: Figure['shape'], color: Figure['color']) {
    this.shape = shape;
    this.color = color;
  }

  abstract getArea(): number;
}

export class Triangle extends Shape {
  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    super('triangle', color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides!',
      );
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    super('circle', color);

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0!');
    }
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends Shape {
  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    super('rectangle', color);

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0!');
    }
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
