interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function roundToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
