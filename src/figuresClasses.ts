type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export function throwError(...args: number[]): void {
  if (args.some((item: number) => item <= 0)) {
    throw new Error('your error message');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arr: number[] = [a, b, c];

    arr.sort((x: number, y: number) => x - y);

    if (arr[2] >= (arr[0] + arr[1])) {
      throw new Error('your error message');
    }

    throwError(a, b, c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    throwError(radius);
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    throwError(width, height);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
