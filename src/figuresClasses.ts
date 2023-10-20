type Color = 'blue' | 'green' | 'red';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape:Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    const conditionSize = a + b <= c || a + c <= b || c + b <= a;
    const conditionLessZero = a <= 0 || b <= 0 || c <= 0;

    if (conditionLessZero) {
      throw new Error('Parameters must be greater than 0');
    }

    if (conditionSize) {
      throw new Error(`It is not possible
       to construct a triangle with these sides`);
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(perimeter * (
      (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c)
    ));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
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
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Parameters must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
