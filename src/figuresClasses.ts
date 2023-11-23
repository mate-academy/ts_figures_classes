export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: string,
  color: string,
  getArea(): number
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('Invalid triangle!');
    }
  }

  getArea(): number {
    const side = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      side * (side - this.a) * (side - this.b) * (side - this.c),
    );
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea().toFixed(2).replace(/\.?0+$/, '');

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
