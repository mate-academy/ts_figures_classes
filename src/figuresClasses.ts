export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

function calcArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  color: Figure['color'];

  a: number;

  b: number;

  c: number;

  constructor(
    color: Figure['color'],
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle proportions');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return calcArea(area);
  }
}

export class Circle implements Figure {
  color: Figure['color'];

  radius: number;

  shape: Figure['shape'] = 'circle';

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return calcArea(area);
  }
}

export class Rectangle implements Figure {
  width: number;

  heigth: number;

  color: Figure['color'];

  shape: Figure['shape'] = 'rectangle';

  constructor(color: Figure['color'], width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }

    this.heigth = height;
    this.color = color;
    this.width = width;
  }

  getArea(): number {
    const area = this.heigth * this.width;

    return calcArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
