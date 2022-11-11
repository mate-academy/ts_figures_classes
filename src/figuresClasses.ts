type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

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
      throw new Error('Triangle sides need to be over than 0');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error(`
        The length of a side of a triangle cannot be
        less than or equal to the sum of two other sides.
      `);
    }
  }

  getArea(): number {
    const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const square = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB)
      * (halfPerimeter - this.sideC),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius need to be over 0');
    }
  }

  getArea(): number {
    const square = this.radius ** 2 * Math.PI;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private height: number,
    private width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Rectangle height and width need to be over 0');
    }
  }

  getArea(): number {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
