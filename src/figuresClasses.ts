export interface Figure {
  shape: string;
  color: string;
  getArea(): number | string;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: string = 'triangle',
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Arror');
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error(
        `throws an arror: ${sideA} and ${sideB} and ${sideC} cannot create triangle`,
      );
    }
  }

  getArea(): number | string {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    const result = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Arror');
    }
  }

  getArea(): number | string {
    const result = this.radius ** 2 * Math.PI;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Arror');
    }
  }

  getArea(): number | string {
    const result = this.width * this.height;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
