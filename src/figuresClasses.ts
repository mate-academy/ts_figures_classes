export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue'
  getArea(): number,
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    const longestSide = Math.max(a, b, c);
    const restSides = a + b + c - Math.max(a, b, c);

    const sidesNotZero: boolean = a > 0 && b > 0 && c > 0;

    if (longestSide >= restSides || !sidesNotZero) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.color = color;

    if (radius > 0) {
      this.radius = radius;
    } else {
      throw new Error();
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
  ) {
    this.color = color;

    if (height <= 0 || width <= 0) {
      throw new Error('it is not rectangle');
    }

    this.height = height;
    this.width = width;
  }

  getArea(): number {
    const area = (this.height * this.width);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
