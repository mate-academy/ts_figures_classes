export interface Figure {
  shape: 'triange' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle {
  color: string;

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length is < than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('sides cant form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return parseFloat((Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c))).toFixed(2));
  }
}

export class Circle {
  color: string;

  shape: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.shape = 'circle';

    if (radius > 0) {
      this.radius = radius;
    } else {
      throw new Error('Radius < 0');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle {
  color: string;

  shape: string;

  width: number;

  heigth: number;

  constructor(color: string, width: number, heigth: number) {
    this.color = color;
    this.shape = 'rectangle';

    if (width > 0 && heigth > 0) {
      this.width = width;
      this.heigth = heigth;
    } else {
      throw new Error('Width or heigth is < than 0');
    }
  }

  getArea(): number {
    return parseFloat((this.width * this.heigth).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
