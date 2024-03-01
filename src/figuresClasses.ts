export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides.');
    }

    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    const area = Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100; // Round to 2 decimal places
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  if (figure instanceof Triangle) {
    return `A ${figure.color} triangle - ${figure.getArea()}`;
  }

  if (figure instanceof Circle) {
    return `A ${figure.color} circle - ${figure.getArea()}`;
  }

  if (figure instanceof Rectangle) {
    return `A ${figure.color} rectangle - ${figure.getArea()}`;
  }

  throw new Error('Invalid figure type.');
}
