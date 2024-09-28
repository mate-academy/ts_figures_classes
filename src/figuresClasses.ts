type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = `triangle`,
  ) {
    const sorted = [a, b, c].sort((num1, num2) => num2 - num1);

    if (this.a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (sorted[0] >= sorted[1] + sorted[2]) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiperemeter = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(
      semiperemeter *
        (semiperemeter - this.a) *
        (semiperemeter - this.b) *
        (semiperemeter - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = `circle`,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = `rectangle`,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const currentArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${currentArea}`;
}
