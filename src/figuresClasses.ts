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
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.b <= 0
      || this.c <= 0
      || this.a <= 0
      || this.c >= this.a + this.b
      || this.a >= this.c + this.b
      || this.b >= this.a + this.c
    ) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return +(1 / 4 * Math.sqrt((this.b + this.c - this.a)
       * (this.a + this.b + this.c)
       * (this.a - this.b + this.c)
       * (this.a + this.b - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
