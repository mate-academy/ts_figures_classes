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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'All sides of the triangle must be grater than 0',
      );
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'Invalid triangle sides: longest side must be'
        + 'shorter than the sum of others',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return parseFloat((
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Invalid radius: must be greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
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
      throw new Error(
        'Invalid rectangle: any side must be greater than 0',
      );
    }
  }

  getArea(): number {
    return parseFloat(Math.round(this.height * this.width).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const result: string
  = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
