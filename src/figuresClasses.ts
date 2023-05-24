export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  sides: number[];

  constructor(color: string, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.sides = [a, b, c];

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of the triangle must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The given sides cannot form a triangle.');
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius of the circle must be greater than 0.');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height of the rectangle must be greater than 0.',
      );
    }
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
