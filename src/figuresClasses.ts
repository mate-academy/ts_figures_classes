type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [this.a, this.b, this.c];

    if (!sides.every(Number.isFinite)) {
      throw new Error(`All sides must be valid numbers.`);
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(`Each side of your triangle must be positive.`);
    }

    const sortedSides = sides.sort((x, y) => x - y);

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(
        `The longest side of your triangle can't be greater than or equal to the sum of the other two sides.`,
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius can not be negative or zero');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle radius can not be negative or zero');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
