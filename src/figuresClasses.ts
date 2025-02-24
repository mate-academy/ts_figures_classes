export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: `triangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: `circle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: `rectangle`;

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
