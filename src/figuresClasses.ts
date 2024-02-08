type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number,
    private b: number,
    private c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side cannot be equal to 0');
    }

    const longDigit = Math.max(a, b, c);
    const sumLessSides = a + b + c - longDigit;

    if (longDigit >= sumLessSides) {
      throw new Error(`Side ${a} ${b} ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = 1 / 2 * (this.a + this.b + this.c);

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color,
    private radius: number) {
    if (radius <= 0) {
      throw new Error('Radius can not be less or equal 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
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
      throw new Error('One of sides is less or equal 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
