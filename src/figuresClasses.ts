enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.shape = Shape.Triangle;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'All the sides of a triangle must be greater than 0!',
      );
    }

    if (a + b === c || a + c === b || b + c === a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle!`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // s = semiperimeter
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error('The radius of a circle must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    this.shape = Shape.Rectangle;

    if (a <= 0 || b <= 0) {
      throw new Error('All the sides of a rectangle must be greater than 0!');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
