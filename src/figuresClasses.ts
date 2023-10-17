type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid length of the side!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This is not a triangle!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.round(Math.sqrt(p * (p - this.a) * (p - this.b)
      * (p - this.c)) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius!');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid width or height!');
    }
  }

  getArea(): number {
    const area = Math.round(this.width * this.height * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
