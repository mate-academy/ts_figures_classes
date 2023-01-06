/* eslint-disable @typescript-eslint/explicit-function-return-type */
export interface Figure {
  shape: 'triangle'| 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

enum Color {
  red,
  green,
  blue
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

function getTruncNum(number: number) {
  return Math.trunc(number * 100) / 100;
}

export class Triangle {
  public shape: string = Shape.triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if ([sideA, sideB, sideC].some((n) => n <= 0)) {
      throw new Error('One side is less or equal than 0');
    }

    const sumOfSides1 = sideA >= sideB + sideC;
    const sumOfSides2 = sideB >= sideA + sideC;
    const sumOfSides3 = sideC >= sideB + sideA;

    if (sumOfSides1 || sumOfSides2 || sumOfSides3) {
      throw new Error('One side longest than a sum of two others');
    }
  }

  getArea(): number {
    const perimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(perimeter
      * (perimeter - this.sideA) * (perimeter - this.sideB)
      * (perimeter - this.sideC));

    return getTruncNum(area);
  }
}

export class Circle {
  public shape: string = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less or equal than 0');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius * this.radius);

    return getTruncNum(area);
  }
}

export class Rectangle {
  public shape: string = Shape.rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Height / width is less or equal than 0');
    }
  }

  getArea():number {
    const area = this.height * this.width;

    return area;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
