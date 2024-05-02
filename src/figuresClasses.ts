type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  static isValidTriangle(a: number, b: number, c: number): boolean {
    const arrOfSides: number[] = [a, b, c];
    const maxSide: number = Math.max(...arrOfSides);
    const sum = arrOfSides
      .filter((num: number) => num !== maxSide)
      .reduce((acc: number, elem: number) => acc + elem, 0);

    return maxSide < sum;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!Triangle.isValidTriangle(a, b, c) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Is not a valid triangle');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Sides of rectangle must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
