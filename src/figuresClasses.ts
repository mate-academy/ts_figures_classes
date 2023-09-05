export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type TColor = 'blue' | 'red' | 'green';

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(public color: TColor, public a: number,
    public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    if (a + b <= c || c + b <= a || c + a <= b) {
      throw new Error('Invalid triangle sides');
    }
    this.shape = Shape.Triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(public color: TColor, public radius: number) {
    if (radius <= 0) {
      throw new Error();
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(public color: TColor,
    public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
