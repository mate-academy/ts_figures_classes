type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number; // Rounded down to hundredths.
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (!this.isTriangle(a, b, c)) {
      throw new Error('Given sides do not form a triangle');
    }
    this.shape = 'triangle';
  }

  private isTriangle = (
    sideA: number,
    sideB: number,
    sideC: number,
  ): boolean => sideA > 0 && sideB > 0 && sideC > 0
    && sideA < (sideB + sideC)
    && sideB < (sideA + sideC)
    && sideC < (sideB + sideA);

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(100 * Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c))) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Radius of a circle can not be negative');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius * this.radius) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width < 0) {
      throw new Error('Width of a rectangle can not be negative');
    }

    if (height < 0) {
      throw new Error('Height of a rectangle can not be negative');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
