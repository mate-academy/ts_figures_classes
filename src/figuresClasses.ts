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

    private aSide: number,
    private bSide: number,
    private cSide: number,
  ) {
    const sides = [aSide, bSide, cSide];
    const longestSide: number = Math.max(...sides);
    const indexOfLongest = sides.indexOf(longestSide);
    const otherSides: number[] = sides.slice(0, indexOfLongest);
    const arePositive: boolean = sides[0] > 0 && sides[1] > 0 && sides[2] > 0;
    const isTriangle: boolean = longestSide < otherSides[0] + otherSides[1];

    if (!arePositive || !isTriangle) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const { aSide, bSide, cSide } = this;
    const halfPerimetr = (aSide + bSide + cSide) / 2;
    const area = Math.sqrt(halfPerimetr
      * (halfPerimetr - aSide)
      * (halfPerimetr - bSide)
      * (halfPerimetr - cSide));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Not a circle');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private heith: number,
  ) {
    this.color = color;

    if (width <= 0 || heith <= 0) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): number {
    const { width, heith } = this;

    return width * heith;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
