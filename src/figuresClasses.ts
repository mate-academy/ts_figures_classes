enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shapes.Triangle;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = Shapes.Circle;
  }

  getArea(): number {
    const area: number = (this.radius * this.radius) * 3.14;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = Shapes.Rectangle;
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
