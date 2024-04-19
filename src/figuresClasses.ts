export interface Figure {
  shape: string;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = `triangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid side lengths: a triangle cannot be formed');
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const square: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return square;
  }
}

export class Circle implements Figure {
  public shape: string = `circle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const square: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = `rectangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  if (Number.isInteger(area)) {
    return `A ${figure.color} ${figure.shape} - ${area}`;
  } else {
    return `A ${figure.color} ${figure.shape} - ${area.toFixed(2)}`;
  }
}
