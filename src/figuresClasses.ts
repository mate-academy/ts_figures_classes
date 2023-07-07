enum Figures {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Figures;
  color: Color;
  getArea() : number;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
}

export class Triangle implements Figure {
  shape: Figures.Triangle;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = Figures.Triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid side length');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Incorrect side lengths for a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return +(result).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Figures.Circle;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = Figures.Circle;
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Inalid radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figures.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = Figures.Rectangle;
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side length');
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
