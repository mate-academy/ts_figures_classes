enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

function roundNumHund(num: number): number {
  return Math.floor(num * 100) / 100;
}
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private aSide: number,
    private bSide: number,
    private cSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('Wrong length. All sides must be greater than 0');
    }

    if (
      aSide >= bSide + cSide
      || bSide >= aSide + cSide
      || cSide >= aSide + bSide
    ) {
      throw new Error('Wrong length.'
        + 'The longest side of a triangle is >= than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerim = (this.aSide + this.bSide + this.cSide) / 2;
    const area = Math.sqrt(semiPerim * (semiPerim - this.aSide)
      * (semiPerim - this.bSide) * (semiPerim - this.cSide));

    return roundNumHund(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrond circle radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundNumHund(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrond rectangle length');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundNumHund(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
