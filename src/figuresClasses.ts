export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => {};
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides can`t be less than 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(
        'The longest side of a triangle is bigger than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('The radius can`t be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;

    if (a <= 0 || b <= 0) {
      throw new Error('The sides can`t be less than 0');
    }
  }

  getArea(): number {
    return +(this.a * this.b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
