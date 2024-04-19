export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export abstract class Shape implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(public color: string) {}

  abstract shape: string;
  abstract getArea(): number;
}

export class Triangle extends Shape {
  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(color);

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + b <= c || b + c <= a) {
      throw new Error('Sides should be positive and form a valid triangle.');
    }
    this.shape = 'triangle';
  }

  shape: string;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle extends Shape {
  constructor(
    color: string,
    public radius: number,
  ) {
    super(color);

    if (radius <= 0) {
      throw new Error('Radius should be a positive number');
    }
    this.shape = 'circle';
  }

  shape: string;

  getArea(): number {
    const square: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle extends Shape {
  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    super(color);

    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height should be positive!');
    }
    this.shape = 'rectangle';
  }

  shape: string;

  getArea(): number {
    const square: number = this.height * this.width;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${Number.isInteger(area) ? area : area.toFixed(2)}`;
}
