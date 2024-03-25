export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Colors {
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
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a
    ) {
      throw new Error('input is not valid');
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('input is not valid');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
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
      throw new Error('input is not valid');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
