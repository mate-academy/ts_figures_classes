import { Shape, Color } from './types';

interface Figure {
  shape: Shape,
  color: string,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  sides: number[];

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side must be longer than 0!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side can not be longer than two other!');
    }

    this.sides = [a, b, c];
  }

  getArea = (): number => {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be lower 0 or 0');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or heigth can not be lower 0 or 0!');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
