enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a + this.b <= this.c
        || this.a + this.c <= this.b
        || this.b + this.c <= this.a
    ) {
      throw new Error();
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area: number = 3.14 * this.radius * this.radius;

    return Math.round(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
