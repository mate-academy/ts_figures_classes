export interface Figure {
  shape: string;
  color: string;
  getArea() : number;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return +(result).toFixed(2);
  }

  constructor(color: string, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0 || c >= (a + b)) {
      throw new Error('Invalid value');
    }
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Error');
    }
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }

  constructor(color: string, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
