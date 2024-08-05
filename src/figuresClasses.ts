export type Color = 'red' | 'green' | 'blue' | 'yellow' | 'black' | 'white';

export type ShapeType = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: ShapeType = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side lengths must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third side.',
      );
    }
  }

  getArea(): number {
    const area = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(
      area * (area - this.a) * (area - this.b) * (area - this.c),
    );

    return Math.round(result * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  getArea(): number {
    const result = Math.PI * this.radius ** 2;

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const result = this.width * this.height;

    return Math.round(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const color = figure.color;
  const result = figure.getArea();
  const name = figure.constructor.name.toLowerCase();

  return `A ${color} ${name} - ${result}`;
}
