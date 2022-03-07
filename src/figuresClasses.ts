type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea?(): number;
}

abstract class BaseFigure implements Figure {
  shape: Shapes;

  color: Colors;

  constructor(
    shape: Shapes,
    color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends BaseFigure {
  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side <= 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    super('triangle', color);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle extends BaseFigure {
  constructor(
    color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius <= 0');
    }

    super('circle', color);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  shape: Shapes = 'rectangle';

  constructor(
    color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side <= 0');
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
