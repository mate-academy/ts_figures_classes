type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private aSide: number,
    private bSide: number,
    private cSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('Some of part less than 0');
    }

    if (aSide >= bSide + cSide || bSide >= aSide + cSide
      || cSide >= aSide + bSide) {
      throw new Error('The one side of a triangle is >= than a sum of others');
    }
  }

  getArea(): number {
    const perimetr = (this.aSide + this.bSide + this.cSide) / 2;

    return +(Math.sqrt(perimetr
      * (perimetr - this.aSide)
      * (perimetr - this.bSide)
      * (perimetr - this.cSide)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Minus circle radii');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Some of part less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
