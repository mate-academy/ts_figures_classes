export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],

    public a: number,
    public b: number,
    public c: number,

    public shape: Figure['shape'],
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('some of values equal or less then zero');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.c + this.b <= this.a
    ) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: Figure['shape'],
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('radius equal or less then zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public shape: Figure['shape'],
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('some value equal or less then zero');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  // return typeof figure;
}
