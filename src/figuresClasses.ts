// import { type } from "os";

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

interface TriangleSides {
  a: number,
  b: number,
  c: number,
}

interface CircleRadius {
  radius: number,
}

interface RectangleSides {
  width: number,
  height: number,
}

export class Triangle implements Figure, TriangleSides {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Enter valid data');
    }

    if (this.cantForm()) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  cantForm(): boolean {
    return Math.max(this.a, this.b, this.c) * 2 >= this.a + this.b + this.c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const square: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure, CircleRadius {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure, RectangleSides {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
