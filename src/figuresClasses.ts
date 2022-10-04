type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('The side of triangle is less than or equal to zero');
    }

    if (aSide >= bSide + cSide || bSide >= aSide + cSide
      || cSide >= aSide + bSide) {
      throw new Error('Euclid disapproves: you got a degenerate triangle');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.aSide + this.bSide + this.cSide) / 2;

    return Math.floor(Math.sqrt(semiPerimetr * (semiPerimetr - this.aSide)
    * (semiPerimetr - this.bSide) * (semiPerimetr - this.cSide)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Minus circle radii fall out of euclidean geometry');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
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
      throw new Error('Your parameter are less than or equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
