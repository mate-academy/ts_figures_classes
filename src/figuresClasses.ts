enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function invalidValue(...args: number[]): boolean {
  return args.some((param : number) => param <= 0);
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (invalidValue(this.a, this.b, this.c)) {
      throw new Error('Invalid value');
    }

    const largest: number = Math.max(this.a, this.b, this.c);

    if ((this.a + this.b + this.c - largest) <= largest) {
      throw new Error('Sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter : number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (invalidValue(this.radius)) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (invalidValue(this.width, this.height)) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
