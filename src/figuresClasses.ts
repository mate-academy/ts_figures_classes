type Figures = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Figures;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figures = 'triangle';

  color: Colors;

  readonly a: number;

  readonly b: number;

  readonly c: number;

  constructor(color: Colors, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('a,b,c<0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('a,b,c is not triangle');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figures = 'circle';

  color: Colors;

  readonly radius: number;

  constructor(color: Colors, radius: number) {
    if (radius <= 0) {
      throw new Error('radius<0');
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
  shape: Figures = 'rectangle';

  color: Colors;

  readonly width: number;

  readonly height: number;

  constructor(color: Colors, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('must>0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
