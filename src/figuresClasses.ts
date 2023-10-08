type Shapes = 'triangle'|'circle'|'rectangle';
type Colors = 'red'|'green'|'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  color: Colors;

  a: number;

  b: number;

  c: number;

  constructor(color: Colors, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be greater than 0.');
    }

    if (a >= b + c || b >= a
       + c || c >= a + b) {
      throw new Error('The longest side of the triangle should be'
       + 'smaller than the sum of the other two sides.');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s
     * (s - this.a)
       * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes;

  color: Colors;

  radius: number;

  constructor(color: Colors, radius: number) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius of the circle must be greater than 0.');
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  color: Colors;

  width: number;

  height: number;

  constructor(color: Colors, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height'
      + 'of the rectangle must be greater than 0.');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
