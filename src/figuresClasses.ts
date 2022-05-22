type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

function error(...arg: number[]): void {
  if (arg.some((el) => el <= 0)) {
    throw new Error('Error');
  }
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea():number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    error(a, b, c);

    const arr: number[] = [a, b, c].sort((item1, item2) => item1 - item2);

    if (arr[2] >= arr[0] + arr[1]) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    error(radius);
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    error(width, height);
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
