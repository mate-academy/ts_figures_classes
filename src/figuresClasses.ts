export interface Figure {
  shape : string,
  color : string,
  getArea() : number | Error,
}

export class Triangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if ((a <= 0 || b <= 0 || c <= 0)
      || Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number | Error {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c));

    return (Math.floor(area * 100) / 100);
  }
}

export class Circle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number | Error {
    const area = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100) / 100);
  }
}

export class Rectangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number | Error {
    const area = this.height * this.width;

    return area;
  }
}

export function getInfo(figure) : string {
  const info = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return info;
}
