type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = Shape.triangle,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Values must be greater than 0');
    }

    const getMaxSide = Math.max(a, b, c);

    if (getMaxSide >= a + b + c - getMaxSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = Shape.circle,
  ) {
    if (this.radius <= 0) {
      throw new Error('Enter correct value');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * (this.radius * this.radius);

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = Shape.rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Values must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
