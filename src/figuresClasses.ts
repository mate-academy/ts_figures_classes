type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any side of triangle can not be zero or lower');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b + c - longestSide) {
      throw new Error(
        'Longest side couldnt be equal or bigger than sum of two other ones',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;

    return Math.floor(
      (Math.sqrt(p * (p - a) * (p - b) * (p - c))) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius could not be zero or lower');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any side of rectangle could not be zero or lower');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
