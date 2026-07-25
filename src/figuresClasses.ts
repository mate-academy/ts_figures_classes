type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error();
    }

    if (
      sideA + sideB <= sideC ||
      sideB + sideC <= sideA ||
      sideA + sideC <= sideB
    ) {
      throw new Error();
    }
  }

  shape: Shape = 'triangle';

  getArea(): number {
    const p: number = (this.sideA + this.sideB + this.sideC) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) *
          100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  shape: Shape = 'circle';

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error();
    }
  }

  shape: Shape = 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
