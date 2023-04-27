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
  public color: Color;

  public shape: Shape;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = Shape.Triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const sides: number[] = [a, b, c].sort(); /* Sort helps with detecting 0s
                                      if they were not in the first position */

    if ((sides[0] + sides[1] <= sides[2])
    || (sides[2] + sides[0] <= sides[1])
    || (sides[2] + sides[1] <= sides[0])
    || sides[0] <= 0) {
      throw new Error('Triangle not possible with given sides!');
    }
  }

  getArea(): number {
    /* I hate math and therefore hate you for this,
    but as requested, Heron's formula */
    const semiPer: number = (this.a + this.b + this.c) / 2;
    const bracket1: number = semiPer - this.a;
    const bracket2: number = semiPer - this.b;
    const bracket3: number = semiPer - this.c;
    const squaredResult: number = semiPer * bracket1 * bracket2 * bracket3;
    const result: number = Math.sqrt(squaredResult);

    return (Math.round(result * 100)) / 100;
  }
}

export class Circle implements Figure {
  public color: Color;

  public shape: Shape;

  public radius: number;

  constructor(color: Color, radius: number) {
    this.shape = Shape.Circle;
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Circle not possible with given radius!');
    }
  }

  getArea(): number {
    return (Math.floor((this.radius ** 2) * Math.PI * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public color: Color;

  public shape: Shape;

  public height: number;

  public width: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = Shape.Rectangle;
    this.color = color;
    this.width = width;
    this.height = height;

    const sides = [width, height].sort();

    if (sides[0] <= 0) {
      throw new Error('Rectangle not possible with given sides!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
