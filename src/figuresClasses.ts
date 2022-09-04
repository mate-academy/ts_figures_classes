type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkError(...args: number[]): void {
  if (args.some((item: number) => item <= 0)) {
    throw new Error('Side length should be a positive number');
  }
}

function checkSides(a: number, b: number, c: number): void {
  if (a >= b + c || b >= a + c || c >= b + a) {
    throw new Error(
      'The longest side of a triangle is >= than a sum of two others',
    );
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
    checkError(a, b, c);
    checkSides(a, b, c);
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkError(radius);
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    checkError(width, heigth);
  }

  getArea(): number {
    return Math.floor(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
