type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea (): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.checkProperties();
  }

  getArea(): number {
    const semiPer = (this.sideA + this.sideB + this.sideC) / 2;
    const A = semiPer - this.sideA;
    const B = semiPer - this.sideB;
    const C = semiPer - this.sideC;

    return Number(Math.sqrt(semiPer * A * B * C).toFixed(2));
  }

  checkProperties(): void {
    const maxSide = Math.max(this.sideA, this.sideB, this.sideC);
    const twoOtherSides = this.sideA + this.sideB + this.sideC - maxSide;

    if (maxSide >= twoOtherSides) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkProperties();
  }

  getArea(): number {
    return Number((Math.PI * this.radius * this.radius).toFixed(2));
  }

  checkProperties(): void {
    if (this.radius < 0) {
      throw new Error('this circle doesn\'t exist');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.checkProperties();
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }

  checkProperties(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width or height is <= 0');
    }
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'circle': {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }

    case 'rectangle': {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }

    default: {
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
    }
  }
}
