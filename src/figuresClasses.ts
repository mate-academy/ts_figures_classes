export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle {
  color: string;

  a: number;

  b: number;

  c: number;

  shape: 'triangle';

  constructor(
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b
    ) {
      throw new Error('sides of triangle must be less than sum of two others');
    }

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
    ) {
      throw new Error('Any side length must be more 0');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    return +(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    ).toFixed(2);
  }
}

export class Circle {
  color: string;

  radius: number;

  shape: 'circle';

  constructor(
    color: string,
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Radius must be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  color: string;

  width: number;

  height: number;

  shape: 'rectangle';

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be more than 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
