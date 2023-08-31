type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || c <= 0 || a + c <= b || b + c <= a || a + b <= c) {
      throw new Error('Invalid lenght of side');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius of circle');
    }
  }

  getArea(): number {
    const radius = Math.PI * (this.radius ** 2);

    return Math.floor(radius * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid side of rectangle');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
