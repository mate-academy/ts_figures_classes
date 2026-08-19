type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('numbers should be more then 0');
    }

    const theLingestSide = Math.max(a, b, c);
    const sum = a + b + c - theLingestSide;

    if (theLingestSide >= sum) {
      throw new Error('this can form Triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return roundDown(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('number needs to be more then 0');
    }
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('write valide numbers');
    }
  }

  getArea(): number {
    return roundDown(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
