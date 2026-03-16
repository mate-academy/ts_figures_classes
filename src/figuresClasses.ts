type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('invalid length');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('one side is more than a sum of two others');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('invalid radius');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public length: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('invalid length or width');
    }
  }

  getArea(): number {
    const rectangleArea: number = this.width * this.length;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
