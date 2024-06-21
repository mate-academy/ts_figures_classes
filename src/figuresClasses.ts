type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea: () => number;
}

function checkOnError(...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error('Some side is less than or equal to 0');
  }
}
export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkOnError(a, b, c);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Triangle inequality violated sum must be greater sum®');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkOnError(radius);

    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkOnError(width, height);

    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
