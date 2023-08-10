
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  sides?: { a: number; b: number; c: number };
  radius?: number;
  width?: number;
  height?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  public color: Color;

  public sides: { a: number; b: number; c: number };

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error: Sides of a triangle must be positive numbers.');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        `Error: Sides ${a}, ${b}, and ${c} cannot form a triangle.`,
      );
    }

    this.shape = 'triangle';
    this.color = color;

    this.sides = {
      a, b, c,
    };
  }

  getArea(): number {
    const { a, b, c } = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  public color: Color;

  public radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Error: Radius must be a positive number.');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  public color: Color;

  public width: number;

  public height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Error: Width and height of a rectangle must be positive numbers.',
      );
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
