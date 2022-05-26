type Color = 'red' | 'green' | 'blue';
type Shape = 'circle' | 'triangle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function roundNumber(num: number): number {
  return Math.floor(num * 100) / 100;
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
      throw new Error('Object dimensiones are invalid');
    }
  }

  getArea(): number {
    const area = (this.a + this.b + this.c) / 2;

    return roundNumber(Math.sqrt(area * (area - this.a) * (area - this.b)
    * (area - this.c)));
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape;

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Object dimensions are invalid');
    }
  }

  getArea(): number {
    return roundNumber(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
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
      throw new Error('Object dimensions are invalid');
    }
  }

  getArea(): number {
    return roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
