export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkOnError(errorMessage: string, ...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkOnError('This is not a triangle', a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle`);
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkOnError('Circle radius must be greater than 0', radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkOnError('Rectangle sides must be greater than 0', width, height);
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
