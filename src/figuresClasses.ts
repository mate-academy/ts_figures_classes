export type Form = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Form;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Form = 'triangle';

  a: number;

  b: number;

  c: number;

  color: Color;

  constructor(color: Color, a: number, b: number, c: number) {
    const longest = Math.max(a, b, c);
    const P = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0 || longest >= P - longest) {
      throw new Error('Invalid triangle sides');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Form = 'circle';

  r: number;

  color: Color;

  constructor(color: Color, r: number) {
    if (r <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.r = r;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Form = 'rectangle';

  width: number;

  height: number;

  color: Color;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
