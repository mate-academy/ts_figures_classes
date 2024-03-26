type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type GetArea = () => number;

const roundArea = (area: number): number => Math.floor(area * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: GetArea;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA + sideB <= sideC) {
      throw new Error();
    }
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;

    const s: number = (1 / 2) * (sideA + sideB + sideC);

    return roundArea(Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius has to be a positive number');
    }
  }

  getArea(): number {
    return roundArea(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Each side has to be longer than 0');
    }
  }

  getArea(): number {
    return roundArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
