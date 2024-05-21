export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    let longestSide: number = 0;
    let sidesSum: number = 0;

    if (a > b && a > c) {
      longestSide = a;
      sidesSum = b + c;
    } else if (b > a && b > c) {
      longestSide = b;
      sidesSum = a + c;
    } else if (c > a && c > b) {
      longestSide = c;
      sidesSum = a + b;
    }

    if (a <= 0 || b <= 0 || c <= 0 || longestSide >= sidesSum) {
      throw new Error('cannot form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = (a + b + c) / 2;

    return parseFloat(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('verify the radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('verify the sides length');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return parseFloat((width * height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
