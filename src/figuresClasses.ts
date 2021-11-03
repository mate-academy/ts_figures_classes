type FigureColor = 'red' | 'green' | 'blue';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export function validateTriangle(a: number, b: number, c: number): boolean {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    return false;
  }

  return true;
}

export function validate(...args: number[]): boolean {
  return args.some((side: number) => side <= 0);
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (validateTriangle(a, b, c)) {
      throw new Error('Invalid data input!');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    ).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (validate(width, height)) {
      throw new Error('Side must be larger then zero!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (validate(radius)) {
      throw new Error('Radius must be larger then zero!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
