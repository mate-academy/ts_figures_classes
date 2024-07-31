type ShapeType = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeType;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Side a = ${this.a}, side b = ${this.b}, side c = ${this.c} but no side can be equal to zero`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The length of any side of a triangle is always less than the sum of the lengths of its other two sides.`,
      );
    }
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number');
    }
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(
        `Width = ${this.width}, height = ${this.height}, but no side can be equal to zero`,
      );
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
