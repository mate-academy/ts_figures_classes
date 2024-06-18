type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    readonly color: Color,
    readonly sideA: number,
    readonly sideB: number,
    readonly sideC: number,
  ) {
    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error(
        `The sum of the lengths of any two
        sides is must be greater than a third.`,
      );
    }

    if (sideA * sideB * sideC <= 0) {
      throw new Error('All sides must be greater than 0.');
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const s = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    readonly color: Color,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    readonly color: Color,
    readonly sideA: number,
    readonly sideB: number,
  ) {
    if (sideA * sideB <= 0) {
      throw new Error('All sides must be greater than 0.');
    }
  }

  getArea(): number {
    const s = this.sideA * this.sideB;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
