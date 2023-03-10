enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number
}

function checkSides(shape: Shape, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(`Invalid ${shape}`);
  }

  if (sides.length > 2) {
    const [a, b, c] = sides.sort(
      (prev, next) => prev - next,
    );

    if (c >= a + b) {
      throw new Error(`Invalid ${shape}`);
    }
  }
}

function toHundrets(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    checkSides(this.shape, sideA, sideB, sideC);
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) * 0.5;

    return toHundrets(
      Math.sqrt(
        semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkSides(this.shape, radius);
  }

  getArea(): number {
    return toHundrets((Math.PI * (this.radius ** 2)));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkSides(this.shape, width, height);
  }

  getArea(): number {
    return toHundrets(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
