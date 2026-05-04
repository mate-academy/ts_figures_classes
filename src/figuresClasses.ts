export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Rectangle implements Figure {
  shape = 'rectangle';
  color: 'red' | 'green' | 'blue';
  width: number;
  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be > 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';
  color: 'red' | 'green' | 'blue';
  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape = 'triangle';
  color: 'red' | 'green' | 'blue';
  a: number;
  b: number;
  c: number;

  constructor(color: 'red' | 'green' | 'blue', a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be > 0');
    }
    const longest = Math.max(a, b, c);
    if (longest >= a + b + c - longest) {
      throw new Error(`Sides ${a}, ${b}, ${c} can't form a triangle`);
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

export function getInfo(fig: Figure): string {
  return `A ${fig.color} ${fig.shape} - ${fig.getArea()}`;
}

