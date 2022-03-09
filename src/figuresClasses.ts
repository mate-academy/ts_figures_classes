type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea?(): number
}

class MainFigure implements Figure {
  constructor(
    public shape: Shapes,
    public color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends MainFigure {
  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super('triangle', color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side is <= 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const sqrt = semi * (semi - this.a) * (semi - this.b) * (semi - this.c);

    return Math.floor(Math.sqrt(sqrt) * 100) / 100;
  }
}

export class Circle extends MainFigure {
  constructor(
    color: Colors,
    public radius: number,
  ) {
    super('circle', color);

    if (this.radius <= 0) {
      throw new Error('Radius is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle extends MainFigure {
  constructor(
    color: Colors,
    public width: number,
    public height: number,
  ) {
    super('rectangle', color);

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
