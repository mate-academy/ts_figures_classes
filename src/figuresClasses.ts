export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validateSides();
  }

  private validateSides(): void {
    const sortedSides = [this.a, this.b, this.c].sort(
      (side1, side2) => side1 - side2,
    );

    if (sortedSides[0] <= 0) {
      throw new Error(`length of each side must be greater than 0`);
    }

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(
        `sides ${this.a}, ${this.b}, and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.validateRadius();
  }

  private validateRadius(): void {
    if (this.radius <= 0) {
      throw new Error(`radius must be greater than 0`);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.validateSides();
  }

  private validateSides(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`length of all the sides must be greater than 0`);
    }
  }

  getArea(): number {
    const area: number = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
