type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c].sort((cur, next) => cur - next);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('Triangle does not exist!');
    }

    if (sides.filter((side) => side <= 0).length > 0) {
      throw new Error('Incorrect sides');
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfPerimetr * (halfPerimetr - this.a)
    * (halfPerimetr - this.b) * (halfPerimetr - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Incorrect radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect parameters of rectangle');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
