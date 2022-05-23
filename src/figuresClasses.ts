type Shape ='triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export function error(...arg: number[]): void {
  if (arg.some((number: number) => number <= 0)) {
    throw new Error('your error message');
  }
}

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
    error(a, b, c);

    const maxNumber: number[] = [a, b, c].sort((el1, el2) => el1 - el2);

    if (maxNumber[2] >= maxNumber[0] + maxNumber[1]) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    error(radius);
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    error(width, height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
