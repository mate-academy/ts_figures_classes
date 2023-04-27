export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sum = a + b + c;

    const sideIsLessThanZero = a <= 0 || b <= 0 || c <= 0;
    const invalidSideLength = longestSide >= (sum - longestSide);

    if (sideIsLessThanZero || invalidSideLength) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const sP: number = (a + b + c) / 2;

    const area: number = Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area: number = Math.PI * (radius * radius);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area: number = width * height;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
