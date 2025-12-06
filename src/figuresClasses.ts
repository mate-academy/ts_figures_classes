const floorToTwoDecimals = (num: number): number => Math.floor(num * 100) / 100;

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Triangle sides must be greater than 0.');
    }

    if (
      this.sideA + this.sideB <= this.sideC ||
      this.sideA + this.sideC <= this.sideB ||
      this.sideB + this.sideC <= this.sideA
    ) {
      throw new Error(
        `The provided sides (${sideA}, ${sideB}, ${sideC}) do not form a valid triangle.`,
      );
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return floorToTwoDecimals(area);
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return floorToTwoDecimals(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return floorToTwoDecimals(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
