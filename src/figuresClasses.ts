type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One or more sides of a triangle have a negative length');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('The hypotenuse of the triangle is too large');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('A circle cannot have a negative radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('A rectangle cannot have a negative height or width');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return roundToHundredths(width * height);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
