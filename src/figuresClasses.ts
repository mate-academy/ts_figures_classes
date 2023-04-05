type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('Sides cant be equial to 0');
    }

    if (a < 0 || b < 0 || c < 0) {
      throw new Error('Sides cant be negative number');
    }

    if (a >= b + c) {
      throw new Error('This is not triangle!!!');
    }

    if (b >= a + c) {
      throw new Error('This is not triangle!!!');
    }

    if (c >= b + a) {
      throw new Error('This is not triangle!!!');
    }
  }

  getArea(): number {
    const x: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(x * (x - this.a) * (x - this.b) * (x - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius. Radius cant be equial to 0 or less');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

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
    if (width <= 0) {
      throw new Error('Invalid width. Width cant be equial to 0 or less');
    }

    if (height <= 0) {
      throw new Error('Invalid height. Height cant be equial to 0 or less');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
