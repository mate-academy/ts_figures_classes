type Shapes = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    validator('a', a);
    validator('b', b);
    validator('c', c);

    const arraySides: number[] = [a, b, c]
      .sort((number1, number2) => number1 - number2);

    if (arraySides[2] >= (arraySides[1] + arraySides[0])) {
      throw new Error('Please enter correct side valies!');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle {
  shape: Shapes = 'circle';

  color: Color;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    validator('radius', radius);

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    validator('width', width);
    validator('heigth', height);
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.round(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
