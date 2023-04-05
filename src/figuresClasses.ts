type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

function checkOnError(...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error('Some side less 0');
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
    checkOnError(a, b, c);

    const sumaOfTriangle = a + b + c;
    const longestSide = Math.max(a, b, c);
    const otherTwoSide = sumaOfTriangle - longestSide;

    if (longestSide >= otherTwoSide) {
      throw new Error('The longest sige longer biggest the other sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfOfSumaOfTriangle = (a + b + c) / 2;

    const area: number = Math.sqrt(
      halfOfSumaOfTriangle
      * (halfOfSumaOfTriangle - this.a)
      * (halfOfSumaOfTriangle - this.b)
      * (halfOfSumaOfTriangle - this.c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkOnError(radius);
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    checkOnError(height, width);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
