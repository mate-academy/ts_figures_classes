enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Colors = 'red' | 'blue' | 'green';
export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea():number;
}

function wrongLength(...length: number[]): void {
  if (length.some((el) => el <= 0)) {
    throw new Error();
  }
}

export class Triangle implements Figure {
  readonly shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((first, second) => second - first);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error();
    }

    wrongLength(a, b, c);
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const spA = (semiPerimeter - this.a);
    const spB = (semiPerimeter - this.b);
    const spC = (semiPerimeter - this.c);

    return Math.round(Math.sqrt(semiPerimeter * spA * spB * spC) * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    wrongLength(radius);
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    wrongLength(width, height);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
