type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'The triangle may not have the negative  or zero length.',
      );
    }

    const max: number = Math.max(a, b, c);

    if (max >= a + b + c - max) {
      throw new Error(
        `Sides ${a}, ${b} and ${c} aren't suited to form a triangle.`,
      );
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'The radius of the circle may not have the negative or zero length.',
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(
        'The sides of the rectangle may not have the negative or zero length.',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
