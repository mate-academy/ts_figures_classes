type Color = 'red' | 'green' | 'blue';

type Shape = 'rectangle' | 'triangle' | 'circle';

export interface Figure {
  color: Color;
  shape: Shape;
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
    this.validateTriangle();
  }

  validateTriangle(): void {
    const a = this.sideA;
    const b = this.sideB;
    const c = this.sideC;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('Lengths of the sides must be greater than 0.');
    }

    const isSuchTringlePossible = (
      Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)
    );

    if (isSuchTringlePossible) {
      throw Error(
        'No side can be greater than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const s: number = (this.sideA + this.sideB + this.sideC) / 2;
    const area: number = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw Error('Radius must be greater then 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('Width and height must be greater then 0.');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
