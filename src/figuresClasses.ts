// Interface
export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error message');
    }

    if (
      Math.max(this.a, this.b, this.c) >= this.a + this.b ||
      Math.max(this.a, this.b, this.c) >= this.a + this.c ||
      Math.max(this.a, this.b, this.c) >= this.c + this.b
    ) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const squareArea = Math.sqrt(
      perimetr *
        (perimetr - this.a) *
        (perimetr - this.b) *
        (perimetr - this.c),
    );

    return Math.floor(squareArea * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const squareArea = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(squareArea * 100) / 100;
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

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error message');
    }
  }

  getArea(): number {
    const squareArea = this.width * this.height;

    return Math.floor(squareArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
