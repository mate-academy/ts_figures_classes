type ShapeType = 'Triangle' | 'Circle' | 'Rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: ShapeType = 'Triangle';

  constructor(
    public color: ColorType,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All sides must be greater than zero');
    }

    if (
      Math.max(sideA, sideB, sideC) >=
      sideA + sideB + sideC - Math.max(sideA, sideB, sideC)
    ) {
      throw new Error(
        'The longest side must be less than the sum of the other sides',
      );
    }
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;
    const semiperimeter: number = (sideA + sideB + sideC) / 2;
    const area: number = Math.sqrt(
      semiperimeter *
        (semiperimeter - sideA) *
        (semiperimeter - sideB) *
        (semiperimeter - sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'Circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'Rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape.toLowerCase()} - ${figure.getArea()}`;
}
