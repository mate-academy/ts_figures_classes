type Shape = 'triangle' | 'circle' | 'rectangle';
type ColorShape = 'red' | 'green' |'blue';

export interface Figure {
  shape: Shape;
  color: ColorShape;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape:Shape = 'triangle';

  constructor(
    public color: ColorShape,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a === 0 || b === 0 || c === 0) {
      throw new Error('side <= 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape:Shape = 'circle';

  constructor(
    public color: ColorShape,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('radius <= 0');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape:Shape = 'rectangle';

  constructor(
    public color: ColorShape,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error('side <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
