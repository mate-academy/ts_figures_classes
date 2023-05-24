/* eslint-disable max-len */
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle {
  public shape = 'triangle';

  constructor(public color: string, public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`This is not a ${this.shape}.`);
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(`This is not a ${this.shape}.`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(parseFloat(String(area)) * 100) / 100;
  }
}

export class Circle {
  public shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error(`This is not a ${this.shape}.`);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(parseFloat(String(area)) * 100) / 100;
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(public color: string, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(`This is not a ${this.shape}.`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(parseFloat(String(area)) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
