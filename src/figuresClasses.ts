type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => {},
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];
    const perimetr = triangleSides.reduce((sum, side) => sum + side, 0);
    const triangleMaxSide = Math.max(...triangleSides);

    if (triangleSides.some((side) => side <= 0)
      || triangleMaxSide >= perimetr - triangleMaxSide) {
      throw new Error('Invalid dimensions!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid dimensions!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
