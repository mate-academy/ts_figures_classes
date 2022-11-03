type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function round(area: number): number {
  return Math.trunc(area * 100) / 100;
}
export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('incorrect side length');
    }

    const sides: number[] = [this.a, this.b, this.c];
    const longest: number = Math.max(...sides);
    const otherSides: number[] = sides.filter(
      (side: number) => side !== longest,
    );

    if (longest >= otherSides[0] + otherSides[1]) {
      throw new Error('incorrect side length');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return round(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('incorrect radius length');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return round(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('incorrect side length');
    }
  }

  getArea(): number {
    const area: number = this.a * this.b;

    return round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
