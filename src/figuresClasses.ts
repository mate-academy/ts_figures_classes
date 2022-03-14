type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea?(): number;
}

abstract class BasicFigure implements Figure {
  shape: Shape;

  color: Color;

  constructor(
    shape: Shape,
    color: Color,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends BasicFigure {
  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid side');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`triangle with sides ${a}, ${b}, ${c} can't exist`);
    }

    super('triangle', color);
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle extends BasicFigure {
  constructor(
    color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid radius');
    }

    super('circle', color);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle extends BasicFigure {
  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid side');
    }

    super('rectangle', color);
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
