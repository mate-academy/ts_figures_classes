type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getRound(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side should be positive');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('Can not build triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;

    return getRound(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius : number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    return getRound(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    return getRound(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
