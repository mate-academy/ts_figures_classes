export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  color: Figure['color'];

  shape: Figure['shape'] = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Invalid sides for a triangle');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  color: Figure['color'];

  radius: number;

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius for a circle');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  color: Figure['color'];

  width: number;

  height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid dimensions for a rectangle');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = Number.isInteger(area) ? area.toString()
    : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
