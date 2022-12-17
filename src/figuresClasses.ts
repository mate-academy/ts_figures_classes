
type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    const sides = [a, b, c];

    sides.sort((l, k) => l - k);

    const longestSide = sides.pop();

    if (longestSide >= sides[0] + sides[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  shape: Shape;

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;
    const triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius can\'t form a circle');
    }
  }

  shape: Shape;

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width}, ${height} can't form a rectangle`);
    }
  }

  shape: Shape;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
