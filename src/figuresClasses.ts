export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

function validate(a: number, b = 1, c = 1): boolean {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('All values must be > 0');
  }

  return true;
}

function round(value: number): number {
  return Math.trunc(value * 100) / 100;
}
export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validate(a, b, c);

    const condition =
      this.a + this.b <= this.c ||
      this.b + this.c <= this.a ||
      this.a + this.c <= this.b;

    if (condition) {
      throw new Error('Triangle with these values is impossible to form');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return round(area);
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: `red` | `green` | `blue`,
    public radius: number,
  ) {
    validate(radius);
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    validate(width, height);
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
