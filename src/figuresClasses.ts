function isLessThanZero(param: number): boolean {
  return param <= 0;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some(isLessThanZero)) {
      throw new Error('Invalid input params!');
    }

    if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
      throw new Error('It is not a triangle!');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Number(Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if ([radius].some(isLessThanZero)) {
      throw new Error('Invalid radius!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ([width, height].some(isLessThanZero)) {
      throw new Error('Invalid input params!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
