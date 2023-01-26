export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';

    if (this.c >= this.a + this.b) {
      throw new Error(
        'the longest side of a triangle is than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius could more than 0');
    }
  }

  getArea(): number {
    // i know it not good but i don't know how rigth rounded down
    return +(3.1415 * +((this.radius ** 2))
      .toFixed(2))
      .toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public heigth: number,
    public width: number,
  ) {
    this.color = color;
    this.heigth = heigth;
    this.width = width;
    this.shape = 'rectangle';

    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('width and heigth could more than 0');
    }
  }

  getArea(): number {
    return +(this.heigth * this.width).toFixed(2);
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
