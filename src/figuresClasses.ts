type Shape = 'rectangle' | 'circle' | 'triangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Some length is less than or equal to zero');
    }

    if (sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideA + sideC <= sideB) {
      throw new Error('Such triangle cannot exist');
    }
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
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less than zero');
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Some length is less than zero');
    }
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
