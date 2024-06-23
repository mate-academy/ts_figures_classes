export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than zero.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle.`);
    }

    this.color = color;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than zero.');
    }

    this.color = color;

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions must be greater than zero.');
    }

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
