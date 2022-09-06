
enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

function correctvalue(...args: number[]): boolean {
  return args.some((param : number) => param <= 0);
}

export class Triangle implements Figure {
  public shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxLength: number = Math.max(a, b, c);
    const isValidLength: boolean = maxLength >= a + b + c - maxLength;

    if (correctvalue(this.a, this.b, this.c) || isValidLength) {
      throw new Error('Error! sides a, b and c can\'t form a triangle');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    const sqrtValue = Math.sqrt(
      perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c),
    );

    return Number(sqrtValue.toFixed(2));
  }
}

export class Circle {
  public shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (correctvalue(this.radius)) {
      throw new Error('Error! Invalid radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  public shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (correctvalue(this.width, this.height)) {
      throw new Error('Error! Invalid side length');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
