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
    throw new Error(
      `Can't build ${shape} with these sides: ${sides.join(', ')}`,
    );
  }

  if (shape === Shape.Triangle) {
    const [a, b, c] = sides.sort(
      (prev, next) => prev - next,
    );

    if (c >= a + b) {
      throw new Error(
        `Can't build ${shape} with these sides: ${sides.join(', ')}`,
      );
    }
  }
}

function roundToHundrets(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape: Shape = Shape.Triangle;

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

    return roundToHundrets(
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
  readonly shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkSides(this.shape, radius);
  }

  getArea(): number {
    return roundToHundrets((Math.PI * (this.radius ** 2)));
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkSides(this.shape, width, height);
  }

  getArea(): number {
    return roundToHundrets(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
