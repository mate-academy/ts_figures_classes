type ColorTypes = 'red' | 'green' | 'blue';
type ShapeTypes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeTypes;
  color: ColorTypes;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: ColorTypes,
    public a: number,
    public b: number,
    public c: number,
    public shape: ShapeTypes = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides cannot form a triangle');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorTypes,
    public radius: number,
    public shape: ShapeTypes = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorTypes,
    public width: number,
    public height: number,
    public shape: ShapeTypes = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
