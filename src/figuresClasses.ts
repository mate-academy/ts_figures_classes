export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    const biggestSide = Math.max(this.a, this.b, this.c);
    const sum = this.a + this.b + this.c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Impossible to get a triangle');
    }

    if (biggestSide >= sum - biggestSide) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Impossible to get a rectangle');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
