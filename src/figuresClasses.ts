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
    if (a <= 0) {
      throw new Error('Side a must be a positive number');
    }

    if (b <= 0) {
      throw new Error('Side b must be a positive number');
    }

    if (c <= 0) {
      throw new Error('Side c must be a positive number');
    }

    const max = (a > b ? a : b) > c ? (a > b ? a : b) : c;

    if (max === a) {
      if (max >= b + c) {
        throw new Error(
          `sides ${this.a}, ${this.b} and ${this.c} cannot form a triangle`,
        );
      }
    } else if (max === b) {
      if (max >= a + c) {
        throw new Error(
          `sides ${this.a}, ${this.b} and ${this.c} cannot form a triangle`,
        );
      }
    } else {
      if (max >= a + b) {
        throw new Error(
          `sides ${this.a}, ${this.b} and ${this.c} cannot form a triangle`,
        );
      }
    }
  }

  public getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = `circle`;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
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
    if (width <= 0) {
      throw new Error('Width must be a positive number');
    }

    if (height <= 0) {
      throw new Error('Height must be a positive number');
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
