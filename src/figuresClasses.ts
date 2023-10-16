type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    const sides = [aSide, bSide, cSide].sort((a: number, b: number) => a - b);

    if ((sides[0] + sides[1]) <= sides[2] || sides.find((el) => el <= 0)) {
      throw new Error('wrong values for triangle');
    }
  }

  getArea(): number {
    const s = (this.aSide + this.bSide + this.cSide) / 2;

    return Math.floor(Math.sqrt(
      s * (s - this.aSide) * (s - this.bSide) * (s - this.cSide),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong values for circle');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
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
      throw new Error('wrong values for rectangle');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
