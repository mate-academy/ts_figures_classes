export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue,'
}

export interface Figure {
  color: Color;
  shape: Shape;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(public color: Color, public a: number,
    public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides have to be higher than 0');
    }

    if (a + b <= c
      || b + c <= a
      || a + c <= b) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a traingle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius have to be positive');
    }
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(public color: Color, public width: number,
    public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides have to be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
