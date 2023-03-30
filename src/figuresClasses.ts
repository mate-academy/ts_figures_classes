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
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('One of the figure\'s sides less or 0.');
    }

    if (Math.max(aSide, bSide, cSide) >= (aSide + bSide + cSide)
      - Math.max(aSide, bSide, cSide)) {
      throw new Error(`${aSide}, ${bSide} and ${cSide} don't make a triangle.`);
    }
  }

  getArea(): number {
    const semiPerimetr = 0.5 * (this.aSide + this.bSide + this.cSide);

    return +Math.sqrt(Math.abs(semiPerimetr
      * (semiPerimetr - this.aSide)
      * (semiPerimetr - this.bSide)
      * (semiPerimetr - this.cSide))).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius less or 0.');
    }
  }

  getArea(): number {
    return Math.trunc(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('One of side\'s rectangle less or 0');
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
