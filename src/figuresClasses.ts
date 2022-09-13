enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea() : number;
}

function validValue(...args: number[]): boolean {
  return args.some((num) => num <= 0);
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (validValue(a, b, c)) {
      throw new Error('Some side was not indicated');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Triangle can not have one side bigger than other two');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfP * ((halfP - this.a)
      * (halfP - this.b) * (halfP - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (validValue(radius)) {
      throw new Error('Some side was not indicated');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (validValue(width)
      || validValue(height)) {
      throw new Error('Radius was not indicated');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
