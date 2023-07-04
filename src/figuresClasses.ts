export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  shape: string = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Lengths of the sides must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Lengths of the sides must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: string = 'rectangle';

  color: string;

  height: number;

  width: number;

  constructor(color:string, height: number, width: number) {
    this.color = color;
    this.height = height;
    this.width = width;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Lengths of the sides must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
