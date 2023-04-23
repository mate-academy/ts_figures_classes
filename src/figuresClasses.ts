enum Color {
  'red', 'green', 'blue'
}

export interface Figure {
  shape: 'triangle' | 'circle' |'rectangle';
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {
    if ((this.a <= 0 || this.b <= 0 || this.c <= 0)
        || this.c >= (this.a + this.b) || this.b >= (this.a + this.c)
        || this.a >= (this.b + this.c)) {
      throw new Error('ERROR');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const a = +(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    ).toFixed(2);

    return a;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('ERROR');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const a = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return a;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('ERROR');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const a = this.width * this.height;

    return a;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
