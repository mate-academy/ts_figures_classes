export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

function checkSides(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('Value should be greater than 0 !');
  }
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSides(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("The sides don't form a valid triangle");
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    checkSides(radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    checkSides(width, height);
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
