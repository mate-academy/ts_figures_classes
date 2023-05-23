type Color = 'red' | 'green' | 'blue';
type ShapeType = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeType;
  color: Color;

  getArea(): Number;
}

export class Triangle implements Figure {
  shape: ShapeType;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): Number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType;

  constructor(public color: Color, public radius : number) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Not a circle');
    }
  }

  getArea(): Number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): Number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): String {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
