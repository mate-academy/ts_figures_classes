enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape.Triangle | Shape.Circle | Shape.Rectangle,
  color: Color.Red | Color.Green | Color.Blue,
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This triangle cannot exist');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.trunc(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius of circle must be more than 0');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Sides must be more than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
