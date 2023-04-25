enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'green' | 'red' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a + b <= c
      || b + c <= a
      || c + a <= b) {
      throw new Error('That is not a triagnle!');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side value should be more than 0');
    }
  }

  private halfSides = (this.a + this.b + this.c) / 2;

  getArea(): number {
    return Math.round((Math.sqrt(this.halfSides * (this.halfSides - this.a)
    * (this.halfSides - this.b) * (this.halfSides - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('It should be positive value');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(public color: Color,
    public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Enter correct value of side');
    }
  }

  getArea(): number {
    return Math.round((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
