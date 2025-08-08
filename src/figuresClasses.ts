enum ValidationErrors {
  Length = 'All sides must have length greater than 0',
  Inequality = 'The longest side of a triangle is >= than a sum of 2 others',
}
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'blue' | 'green';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ValidationErrors.Length);
    }

    if (max >= b + c + a - max) {
      throw new Error(ValidationErrors.Inequality);
    }
    this.shape = Shape.Triangle;
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ValidationErrors.Length);
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ValidationErrors.Length);
    }
    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
