export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  shape: string;

  color: string;

  a: number;

  b:number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    const bigNum = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || (bigNum >= (a + b + c - bigNum))) {
      throw new Error('your error message');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = p * (p - a) * (p - b) * (p - c);

    return Math.floor((Math.sqrt(area)) * 100) / 100;
  }
}

export class Circle {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius * radius) * 100) / 100;
  }
}

export class Rectangle {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor((width * height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
