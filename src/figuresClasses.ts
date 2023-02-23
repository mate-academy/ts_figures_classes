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
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
