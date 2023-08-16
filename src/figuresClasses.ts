type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape = 'circle';

  radius: number;

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  shape: Shape= 'rectangle';

  width: number;

  height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea = ():number => Math.floor(this.height * this.width * 100) / 100;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
