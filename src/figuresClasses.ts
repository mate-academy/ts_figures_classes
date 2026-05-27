type Colors = `red` | `green` | `blue`;
type Shapes = `triangle` | `circle` | `rectangle`;
export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape: Shapes = `triangle`;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid length');
    }

    const max = (a > b ? a : b) > c ? (a > b ? a : b) : c;

    if (max === a) {
      if (max >= b + c) {
        throw new Error('Invalid length');
      }
    } else if (max === b) {
      if (max >= a + c) {
        throw new Error('Invalid length');
      }
    } else {
      if (max >= a + b) {
        throw new Error('Invalid length');
      }
    }
  }

  public getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  public shape: Shapes = `circle`;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid length');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = `rectangle`;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid length');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

type Figures = Triangle | Rectangle | Circle;

export function getInfo(figure: Figures): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
