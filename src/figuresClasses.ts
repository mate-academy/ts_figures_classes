
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape : Shape;
  color : Color;
  getArea() : number;
}

function checkSides(...args: number[]): void {
  if (Math.min(...args) <= 0) {
    throw new Error('Invalid properties passed');
  }
}

function roundToTwoHundrets(area: number): number {
  return Math.floor(area * 100) / 100;
}

abstract class MakeFigure implements Figure {
  abstract readonly shape : Shape;

  abstract color: Color;
  abstract getArea(): number;
}

export class Triangle extends MakeFigure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();
    checkSides(a, b, c);

    const [katetA, katetB, gipotenuza] : number[]
    = [a, b, c].sort((prevSide, currSide) => prevSide - currSide);

    if (gipotenuza >= katetA + katetB) {
      throw new Error('invalid sides for triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimetr = (a + b + c) / 2;
    const figureArea = Math.sqrt(
      semiperimetr
      * (semiperimetr - a)
      * (semiperimetr - b)
      * (semiperimetr - c),
    );

    return roundToTwoHundrets(figureArea);
  }
}

export class Circle {
  readonly shape = Shape.Circle;

  constructor(
    public color : Color,
    public radius : number,
  ) {
    checkSides(radius);
  }

  getArea() :number {
    const circleArea = (this.radius ** 2) * Math.PI;

    return roundToTwoHundrets(circleArea);
  }
}

export class Rectangle {
  readonly shape = Shape.Rectangle;

  constructor(
    public color : Color,
    public width : number,
    public height : number,
  ) {
    checkSides(width, height);
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
