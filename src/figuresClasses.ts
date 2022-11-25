type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,
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
        'A side of a triangle cannot be equal to 0 or be negative.',
      );
    }

    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= (a + b + c) - maxSide) {
      throw new Error(
        'the longest side of the triangle must'
         + 'be greater than the sum of the other two',
      );
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
      ) * 100,
    ) / 100;
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
        'The radius of the circle must not be zero or negative',
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
    if (width <= 0 || height <= 0) {
      throw new Error(
        'A side of a rectangle cannot be equal to 0 or be negative.',
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
