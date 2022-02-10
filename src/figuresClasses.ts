type Shape = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: ColorType;
  getArea(): number;
}

function round(res:number) :number {
  return Math.floor(res * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Input number <= 0');
    } else if (
      this.a >= (this.c + this.b)
    || this.b >= (this.a + this.c)
    || this.c >= (this.b + this.a)
    ) {
      throw new Error('The longest side of a triangle is >= than a sum of two');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can`t be negative or equal to 0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('The side can`t be negative or equal to 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
