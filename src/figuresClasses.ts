type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    function isRequiredSides(
      side1: number,
      side2: number,
      side3: number,
    ): boolean {
      const minSide = Math.min(side1, side2, side3);
      const maxSide = Math.max(side1, side2, side3);
      const mediumSide = side1 + side2 + side3 - maxSide - minSide;

      if (
        side1 <= 0 ||
        side2 <= 0 ||
        side3 <= 0 ||
        maxSide >= minSide + mediumSide
      ) {
        return false;
      }

      return true;
    }

    if (!isRequiredSides(this.a, this.b, this.c)) {
      throw new Error('error sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt((s - this.a) * (s - this.b) * (s - this.c) * s);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
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
      throw new Error('error sides');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}