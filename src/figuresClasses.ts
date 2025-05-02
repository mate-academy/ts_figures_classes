/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */

// Definindo os tipos permitidos
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Circle implements Figure {
  color: Color;

  shape: Shape = 'circle';

  constructor(
    color: Color,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape: Shape = 'rectangle';

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const maxSide = Math.max(a, b, c);
    const sum = a + b + c;

    if (maxSide >= sum - maxSide) {
      throw new Error(
        // eslint-disable-next-line max-len
        'Invalid triangle: one side is greater than or equal to the sum of others',
      );
    }
  }

  getArea(): number {
    // semiperimeter = s
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

// Exemplos de uso:

const redRectangle = new Rectangle('red', 3, 5);
// console.log(redRectangle.getArea());
console.log(getInfo(redRectangle)); // "A red rectangle - 15"

const greenCircle = new Circle('green', 1);
// console.log(greenCircle.getArea());
console.log(getInfo(greenCircle)); // "A green circle - 3.14"

const blueTriangle = new Triangle('blue', 4, 13, 15);
// console.log(blueTriangle.getArea());
console.log(getInfo(blueTriangle)); // "A blue triangle - 12.49"

// Isso vai dar um erro porque o maior lado (3) é >= a soma dos outros dois
// const invalidTriangle = new Triangle('red', 1, 2, 3);
// Error: Invalid triangle
