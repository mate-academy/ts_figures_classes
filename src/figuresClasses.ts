type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error, length < 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('sides 1, 2 and 3 cant form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        100 * Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Error, length < 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * (Math.PI * this.radius ** 2)) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Error, length < 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * (this.width * this.height)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
