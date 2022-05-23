type Color = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes,
  color: Color,
  getArea(): number
}

function validator(key: string, value: number):void {
  if (value <= 0) {
    throw new Error(`Please enter valid ${key} value`);
  }
}

function rounder(square: number): number {
  return Math.floor(square * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validator('a', a);
    validator('b', b);
    validator('c', c);

    const arraySides: number[] = [a, b, c]
      .sort((number1, number2) => number1 - number2);

    if (arraySides[2] >= (arraySides[1] + arraySides[0])) {
      throw new Error('Please enter correct side valies!');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return rounder(square);
  }
}

export class Circle {
  shape = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validator('radius', radius);
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return rounder(square);
  }
}

export class Rectangle {
  shape = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validator('width', width);
    validator('heigth', height);
  }

  getArea(): number {
    const square = this.width * this.height;

    return rounder(square);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
