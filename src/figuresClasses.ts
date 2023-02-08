function rounded(n: number): number {
  return Math.floor(n * 100) / 100;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (a <= 0 || b <= 0 || c <= 0 || this.checkSide()) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return rounded(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }

  checkSide(): boolean {
    const longest = Math.max(this.a, this.b, this.c);

    return longest >= this.a + this.b + this.c - longest;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    return rounded(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    return rounded(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
