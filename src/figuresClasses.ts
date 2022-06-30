export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red'| 'green' | 'blue';
  getArea():number;
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

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.c >= this.a + this.b) {
      throw new Error('radius is less than 1');
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiPer * (semiPer - this.a)
      * (semiPer - this.b) * (semiPer - this.c)) * 100) / 100;
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

    if (this.radius <= 0) {
      throw new Error('radius is less than 1');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('sides are less than 1');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
