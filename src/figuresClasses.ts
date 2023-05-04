export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c
      || a + c <= b
      || b + c <= a
      || a <= 0
      || b <= 0
      || c <= 0) {
      throw new Error('Triangle not possible with given sides!');
    }

    this.shape = Shape.Triangle;
  }

  getArea(): number {
    /* I hate math and therefore hate you for this,
    but as requested, Heron's formula */
    const semiPer: number = (this.a + this.b + this.c) / 2;
    const sMinusA: number = semiPer - this.a;
    const sMinusB: number = semiPer - this.b;
    const sMinusC: number = semiPer - this.c;
    const squaredResult: number = semiPer * sMinusA * sMinusB * sMinusC;
    const result: number = Math.sqrt(squaredResult);

    return (Math.round(result * 100)) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Circle not possible with given radius!');
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return (Math.floor((this.radius ** 2) * Math.PI * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle not possible with given sides!');
    }

    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
