export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c || a + c <= b || b + c <= a || c + b <= a
    ) {
      throw new Error('Invalid triangle sides');
    }

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
  shape = 'circle';

  color: string;

  radius: number;

  constructor(
    color: string,
    radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Invalid triangle sides');
    }

    this.radius = radius;
  }

  getArea(): number {
    const areaCircle = Math.PI * (this.radius ** 2);

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  height: number;

  width: number;

  constructor(
    color: string,
    height: number,
    width: number,
  ) {
    this.color = color;

    if (height <= 0 || width <= 0) {
      throw new Error('Invalid triangle sides');
    }

    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const area = +figure.getArea().toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
