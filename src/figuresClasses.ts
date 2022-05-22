function roundHundreds(item: number): number {
  return Math.floor(item * 100) / 100;
}

function invalidData(...args: number[]): void {
  if (args.some((el: number) => el <= 0)) {
    throw new Error('invalid data');
  }
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    this.a = a;

    invalidData(a, b, c);

    const max: number[] = [a, b, c].sort((x, y) => x - y);

    if (max[2] >= max[0] + max[1]) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return roundHundreds(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    invalidData(radius);
  }

  getArea(): number {
    return roundHundreds(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    invalidData(width, height);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
