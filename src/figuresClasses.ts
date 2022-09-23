
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number,
}

export function roundedArea(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);

    const hasPositiveSides = [a, b, c].every((side) => side > 0);

    if (!hasPositiveSides || a + b + c - maxSide <= maxSide) {
      throw new Error('Triangle with a side(s) <= 0 doesnt exist.');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return roundedArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle with radius <= 0 doesnt exist.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundedArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Rectangle with length
        of single side <= 0 doesnt exist.`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
