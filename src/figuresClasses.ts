'use strict';

type Shapes = 'triangle' | 'circle' | 'rectangle';

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Shapes = 'triangle',
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error('Invalid side lengths');
    }
  }

  getArea(): number {
    const semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      semiperimeter *
        (semiperimeter - this.sideA) *
        (semiperimeter - this.sideB) *
        (semiperimeter - this.sideC),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public radius: number,
    public shape: Shapes = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
    public shape: Shapes = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = area % 1 === 0 ? area.toFixed(0) : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
