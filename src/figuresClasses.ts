export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  sides: number[];

  constructor(color: string, ...sides: number[]) {
    this.color = color;

    if (sides.some((side) => side <= 0)) {
      throw new Error('All sides must be greater than 0');
    }

    const [a, b, c] = sides.sort((x, y) => x - y);

    if (a + b <= c) {
      throw new Error('Sides cannot form a triangle');
    }

    this.sides = sides;
    this.shape = 'triangle';
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
    this.shape = 'circle';
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
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = area % 1 === 0 ? area.toFixed(0) : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
