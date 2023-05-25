/* eslint-disable max-len */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(public color: Color, public a: number, public b: number, public c: number, public shape: Shape = 'triangle') {
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

export class Circle implements Figure {
  constructor(public color: Color, public radius: number, public shape: Shape = 'circle') {
    if (radius <= 0) {
      throw new Error(`This is not a ${this.shape}.`);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(parseFloat(String(area)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(public color: Color, public width: number, public height: number, public shape: Shape = 'rectangle') {
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
