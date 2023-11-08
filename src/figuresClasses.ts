export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  a?: number;
  b?: number;
  c?: number;
  r?: number;
  width?: number;
  height?: number;
  getArea: () => number;
}

export class Triangle {
  readonly shape: string;

  a: number;

  b: number;

  c: number;

  constructor(
    public color: string,
    a: number,
    b: number,
    c: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (Math.max(a, b, c) >= Math.min(a, b, c)
      + (a + b + c - Math.max(a, b, c) - Math.min(a, b, c))) {
      throw new Error("Sides 1, 2 and 3 can't form a triangle");
    }

    if (a <= 0 && b <= 0 && c <= 0) {
      throw new Error('Please enter a side.');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const halfP: number = 1 / 2 * (this.a + this.b + this.c);
    const area = Math.sqrt(halfP
      * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  readonly shape: string;

  constructor(
    public color: string,
    public r: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (r <= 0) {
      throw new Error('Please enter a radius');
    }

    this.color = color;
    this.r = r;
    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  readonly shape: string;

  color: string;

  height: number;

  width: number;

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    } else {
      throw new Error('Please enter a side');
    }

    this.color = color;
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
