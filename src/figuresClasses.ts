type Shapes = 'triangle'| 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes
  color: Colors
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    if (
      aSide + bSide <= cSide
      || aSide + cSide <= bSide
      || cSide + bSide <= aSide
    ) {
      throw new Error();
    }
  }

  getArea(): number {
    const p: number = (this.aSide + this.bSide + this.cSide) / 2;
    const area: number = Math
      .sqrt(p * (p - this.aSide) * (p - this.bSide) * (p - this.cSide));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.round(3.14 * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: object): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
