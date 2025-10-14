type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'blue' | 'red' | 'green';

export interface Figure {
  color: ColorType;
  shape: ShapeType;
  getArea(): number;
}

export class Triangle implements Figure {
  public color: ColorType;

  public a: number;

  public b: number;

  public c: number;

  public shape: ShapeType = 'triangle';

  constructor(color: ColorType, a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('incorrect data entered');
    }

    const sides = [this.a, this.b, this.c];
    const biggestSide = Math.max(...sides);
    const otherSides = sides.filter((side) => side !== biggestSide);

    if (biggestSide >= otherSides[0] + otherSides[1]) {
      throw new Error('incorrect data entered');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public color: ColorType;

  public radius: number;

  public shape: ShapeType = 'circle';

  constructor(color: ColorType, radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('incorrect data entered');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public color: ColorType;

  public width: number;

  public height: number;

  public shape: ShapeType = 'rectangle';

  constructor(color: ColorType, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('incorrect data entered');
    }
  }

  getArea(): number {
    return Number((this.height * this.width).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
