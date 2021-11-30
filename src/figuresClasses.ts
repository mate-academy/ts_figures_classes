type Shape = 'rectangle' | 'circle' | 'triangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  sideA: number;

  sideB: number;

  sideC: number;

  color: Color;

  shape: Shape = 'triangle';

  constructor(color: Color, sideA: number, sideB: number, sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Some length is less than zero');
    }

    if (sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideA + sideC <= sideB) {
      throw new Error('Such triangle cannot exist');
    }
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea = (): number => {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const result = Math.sqrt(s * (s - this.sideA)
      * (s - this.sideB)
      * (s - this.sideC));

    return Math.floor(result * 100) / 100;
  };
}

export class Circle implements Figure {
  radius: number;

  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius is less than zero');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  };
}

export class Rectangle implements Figure {
  sideA: number;

  sideB: number;

  color: Color;

  shape: Shape = 'rectangle';

  constructor(color: Color, sideA: number, sideB: number) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Some length is less than zero');
    }
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => {
    const result = this.sideA * this.sideB;

    return result;
  };
}

export function getInfo(figure: Figure): string {
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
