type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color
  getArea(): number,
}

export class Triangle {
  color: string;

  a: number;

  b: number;

  c: number;

  shape: Shape = 'triangle';

  constructor(color: string, a: number, b: number, c: number) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('Put correct length');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Put correct length');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const sqrt = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(sqrt * 100) / 100;
  }
}

export class Circle {
  color: string;

  radius: number;

  shape: Shape = 'circle';

  constructor(color: string, radius: number) {
    if (radius < 0) {
      throw new Error('Put correct length');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle {
  color: string;

  width: number;

  height: number;

  shape: Shape = 'rectangle';

  constructor(color: string, width: number, height: number) {
    if (width < 0 || height < 0) {
      throw new Error('Put correct length');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
