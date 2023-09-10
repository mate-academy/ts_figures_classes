type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape
  color: Color
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
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (
      (a <= 0 || b <= 0 || c <= 0)
      || (a >= b + c || b >= a + c || c >= a + b)
    ) {
      throw new Error('Incorrect data entered');
    }
  }

  getArea(): number {
    let s = (this.a + this.b + this.c) / 2;

    s = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(s.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Incorrect data entered');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.height = height;
    this.width = width;

    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect data entered');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
