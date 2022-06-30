type Shape = 'triangle' | 'circle' |'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('Side length is negative or equal zero');
    }

    if (Math.max(sideA, sideB, sideC)
      >= sideA + sideB + sideC - Math.max(sideA, sideB, sideC)) {
      throw new Error(
        'Biggest side don`t most be bigger or equal than sum other sides',
      );
    }
  }

  getArea(): number {
    const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB)
      * (halfPerimeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius is negative or equal zero');
    }
  }

  getArea():number {
    return Math.floor(((Math.PI * this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Side length is negative or equal zero');
    }
  }

  getArea():number {
    return Math.floor((this.sideA * this.sideB) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
