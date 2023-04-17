type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA + sideB <= sideC
        || sideA + sideC <= sideB
        || sideB + sideC <= sideA) {
      throw new Error('Not a valid triangle');
    }
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;
    const s = (sideA + sideB + sideC) / 2;
    const area = Math.floor(100 * (Math
      .sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)))) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Sides must be positive numbers');
    }
  }

  getArea(): number {
    const area: number = this.sideA * this.sideB;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
