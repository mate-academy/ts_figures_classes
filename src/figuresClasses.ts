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
      throw new Error('Sides can not be less than 1');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle!`);
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const perimeter = Math
      .sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter
        - this.b) * (semiperimeter - this.c));

    return Math.floor(perimeter * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.color = color;
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Radius can not be less than 1');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public height: number,
    public width: number,
  ) {
    this.color = color;
    this.shape = Shape.Rectangle;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Sides can not be less than 1');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
