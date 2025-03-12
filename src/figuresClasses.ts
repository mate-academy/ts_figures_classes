type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  readonly shape: Shape;
  readonly color: Color;
  getArea(): number;
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw Error('incorrect sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('incorrect sides');
    }

    const sortedSides: number[] = [this.sideA, this.sideB, this.sideC].sort(
      (a: number, b: number) => b - a,
    );

    if (sortedSides[1] + sortedSides[2] <= sortedSides[0]) {
      throw new Error('incorrect sides');
    }
  }

  getArea(): number {
    const semiperim: number = (this.sideA + this.sideB + this.sideC) / 2;

    return +Math.sqrt(
      semiperim *
        (semiperim - this.sideA) *
        (semiperim - this.sideB) *
        (semiperim - this.sideC),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('incorrect radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
