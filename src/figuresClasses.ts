export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  private sides: number[];

  constructor(public color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Lengths of sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  private radius: number;

  constructor(public color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  private width: number;

  private height: number;

  constructor(public color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
