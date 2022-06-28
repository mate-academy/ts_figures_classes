type Shape = 'triangle'| 'circle'| 'rectangle';
type Color = 'red'| 'green'| 'blue';

function roundNumber(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Please provide valid dimension of Triangle side');
    }
  }

  getArea(): number {
    const area = (this.a + this.b + this.c) / 2;

    return roundNumber(Math.sqrt(area * (area - this.a) * (area - this.b)
    * (area - this.c)));
  }
}

export class Circle {
  color: Color;

  shape: Shape;

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Circle radius should be a positive number');
    }
  }

  getArea(): number {
    return roundNumber(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle {
  color: Color;

  shape: Shape;

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Length of Rectangle side should be a positive number');
    }
  }

  getArea(): number {
    return roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
