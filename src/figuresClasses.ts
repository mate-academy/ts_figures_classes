export type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: FigureColor;
  getArea(): number;
}

function validatePositiveLength(value: number, name: string): void {
  if (value <= 0) {
    throw new Error(`${name} must be greater than 0`);
  }
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: FigureColor;

  a: number;

  b: number;

  c: number;

  constructor(color: FigureColor, a: number, b: number, c: number) {
    validatePositiveLength(a, 'a');
    validatePositiveLength(b, 'b');
    validatePositiveLength(c, 'c');

    const sortedSides = [a, b, c].sort((x, y) => y - x);
    const longestSide = sortedSides[0];
    const sumOfOtherSides = sortedSides[1] + sortedSides[2];

    if (longestSide >= sumOfOtherSides) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: FigureColor;

  radius: number;

  constructor(color: FigureColor, radius: number) {
    validatePositiveLength(radius, 'radius');

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: FigureColor;

  width: number;

  height: number;

  constructor(color: FigureColor, width: number, height: number) {
    validatePositiveLength(width, 'width');
    validatePositiveLength(height, 'height');

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
