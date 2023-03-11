enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

function isNotValidTriangle(...shapeSide: number[]): boolean {
  const sumSides = shapeSide
    .reduce((sideOne: number, sideTwo: number) => sideOne + sideTwo);

  return shapeSide.some((side: number) => side >= (sumSides - side));
}

function isValidLength(...lengths : number[]): boolean {
  return Math.min(...lengths) <= 0;
}

function roundingArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape: Shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (isValidLength(a, b, c)) {
      throw new Error('Length of triangle sides should be greater than 0');
    }

    if (isNotValidTriangle(a, b, c)) {
      throw new Error('The longest side of the triangle must be shorter than'
       + ' the sum of the other two');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
     * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return roundingArea(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (isValidLength(radius)) {
      throw new Error('Radius of circle should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundingArea(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (isValidLength(width, height)) {
      throw new Error('Width and height of rectangle should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundingArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
