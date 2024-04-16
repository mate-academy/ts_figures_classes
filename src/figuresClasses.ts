export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  private longest: number;

  private sum: number;

  private s: number;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.longest = Math.max(this.a, this.b, this.c);
    this.sum = this.a + this.b + this.c;
    this.s = this.sum / 2;

    if (this.longest >= this.sum - this.longest) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    return +Math.sqrt(
      this.s * (this.s - this.a) * (this.s - this.b) * (this.s - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('radius is not a positive number.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width < 0 || this.height < 0) {
      throw new Error("sides 1, 2 can't form a rectangle");
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
