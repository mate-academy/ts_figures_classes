export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid width or height');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('Invalid side length');
    }

    if (this.sideA + this.sideB <= this.sideC
        || this.sideA + this.sideC <= this.sideB
        || this.sideB + this.sideC <= this.sideA) {
      throw new Error('Invalid sides for a triangle');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area
      = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const num = Number.isInteger(figure.getArea())
    ? figure.getArea() : figure.getArea().toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${num}`;
}
