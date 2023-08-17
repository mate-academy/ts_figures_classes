export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: Figure['color'];

  a: number;

  b:number;

  c: number;

  constructor(color: Figure['color'], a: number, b:number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const sem = ((this.a + this.b + this.c) / 2);
    const result = Math.sqrt(
      sem * (sem - this.a) * (sem - this.b) * (sem - this.c),
    );

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: Figure['color'];

  radius: number;

  constructor(color: Figure['color'], radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const result = ((this.radius ** 2) * Math.PI);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Figure['color'];

  height: number;

  width: number;

  constructor(color: Figure['color'], height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid rectangle sides');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return (this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
