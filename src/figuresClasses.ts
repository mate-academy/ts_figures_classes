
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
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
      throw new Error('triangle cannot exist');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('triangle cannot exist');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const Trianglearea = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(100 * Trianglearea) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('circle cannot exist');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return Math.floor(100 * circleArea) / 100;
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
      throw new Error('rectangle cannot exist');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(100 * rectangleArea) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
