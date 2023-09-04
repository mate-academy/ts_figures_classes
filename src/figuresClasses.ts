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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Number can not be less than 0');
    }

    const longestSide = Math.max(a, b, c);

    if ((a + b + c) - longestSide <= longestSide) {
      throw new Error('These sides can not be used to form a triangle');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return +(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    )).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Number can not be less than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Number(Math.floor(area * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Number can not be less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
