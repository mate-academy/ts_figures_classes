enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea():number;
}

function wrongLength(...figureSideLength: number[]): void {
  if (figureSideLength.some((sideLength) => sideLength <= 0)) {
    throw new Error('Side or radius must be greater then zero');
  }
}

function roundHelper(number: number): number {
  return Math.floor(number * 100) / 100;
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
      throw new Error('The sum of sides cant be greater then the biggest one');
    }

    wrongLength(a, b, c);
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const spA = (semiPerimeter - this.a);
    const spB = (semiPerimeter - this.b);
    const spC = (semiPerimeter - this.c);

    return roundHelper(Math.sqrt(semiPerimeter * spA * spB * spC));
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
    return roundHelper(this.radius ** 2 * Math.PI);
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
