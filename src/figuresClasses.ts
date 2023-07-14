export enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.TRIANGLE;

  sides: number[];

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length should be greater than 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.CIRCLE;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.RECTANGLE;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (heigth <= 0 || width <= 0) {
      throw new Error('Side length should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
