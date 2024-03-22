export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRounded(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideC + sideB <= sideA
    ) {
      throw new Error('Incorrect input data. Unable to create a triangle');
    }
  }

  getArea(): number {
    const halfMeter = (this.sideA + this.sideB + this.sideC) / 2;

    return getRounded(
      Math.sqrt(
        halfMeter *
          (halfMeter - this.sideA) *
          (halfMeter - this.sideB) *
          (halfMeter - this.sideC),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return getRounded(area);
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
      throw new Error(
        'Incorrect input data. Negative numbers or zero are not allowed',
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRounded(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
