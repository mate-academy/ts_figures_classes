type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private perimeter: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    this.perimeter = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides should be greater then 0');
    }

    const biggestSide = Math.max(a, b, c);

    if (biggestSide >= (this.perimeter - biggestSide)) {
      throw new Error('imposible make triangle with such sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semi = (this.perimeter) / 2;
    const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be greater then 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = Math.PI * radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides should be greater then 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
