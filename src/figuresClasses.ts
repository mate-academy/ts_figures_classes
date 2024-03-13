interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  sides: number[];

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle sides: cannot form a triangle');
    }
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: `red` | `green` | `blue`,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  sides: number[];

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    this.color = color;
    this.sides = [width, height];
  }

  getArea(): number {
    const [width, height] = this.sides;
    const s = width * height;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
