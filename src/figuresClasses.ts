type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';
export interface Figure {
  color: Color;
  shape?: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape?: Shape,
  ) {
    this.shape = 'triangle';

    if (sideA <= 0 || sideA <= 0 || sideC <= 0) {
      throw new Error('Incorrect values for triangle sides');
    }

    const maxSide: number = Math.max(sideA, Math.max(sideB, sideC));

    if (maxSide >= (sideA + sideB + sideC - maxSide)) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const sunSides: number = this.sideA + this.sideB + this.sideC;
    const semiPerimeter: number = sunSides / 2;

    return Math.floor(Math.sqrt(semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC)) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape?: Shape,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Incorrect values for circle radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape?: Shape,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect values for rectangle sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
