export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Triangle sides must be greater than zero.');
    }

    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error(
        `Sides ${sideA}, ${sideB}, and ${sideC} cannot form a triangle.`,
      );
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than zero.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions must be greater than zero.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
