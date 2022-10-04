// import { moveEmitHelpers } from 'typescript';

export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';

  getArea: () => number;
}

export class Triangle {
  shape: string = 'triangle';

  semiperimeter: number;

  area: number;

  constructor(
    public color: Figure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    this.semiperimeter = (this.a + this.b + this.c) / 2;

    this.area = Math.sqrt(
      this.semiperimeter
          * (this.semiperimeter - this.a)
          * (this.semiperimeter - this.b)
          * (this.semiperimeter - this.c),
    );

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Every side must be bigger than 0!');
    }

    if (!this.area) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Circle {
  shape: string = 'circle';

  area: number;

  constructor(
    public color: Figure,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.area = Math.PI * this.radius ** 2;

    if (this.radius <= 0) {
      throw new Error('The radius must be bigger than 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle {
  shape: string = 'rectangle';

  area: number;

  constructor(
    public color: Figure,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;
    this.area = this.width * this.height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Every side must be bigger than 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
