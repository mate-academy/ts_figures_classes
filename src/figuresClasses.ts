enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export function roundArea(area: number): number {
  return Math.floor((area) * 100) / 100;
}

abstract class Basic implements Figure {
  abstract readonly shape: Shape;

  abstract color: Color;

  abstract getArea(): number;

  checkAllSides(sides: number[]): void {
    if (sides.some((side) => side <= 0)) {
      throw new Error(
        `Figure of shape ${this.shape} should have only positive params`,
      );
    }
  }
}

export class Triangle extends Basic {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();

    this.checkAllSides([a, b, c]);

    const sum: number = (a + b + c) - Math.max(a, b, c);

    if (Math.max(a, b, c) >= sum) {
      throw new Error('not all sides are positive numbers');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimetr = (a + b + c) / 2;

    const area = Math.sqrt(
      semiperimetr
      * (semiperimetr - a)
      * (semiperimetr - b)
      * (semiperimetr - c),
    );

    return roundArea(area);
  }
}

export class Circle extends Basic {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    super();

    this.checkAllSides([radius]);
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return roundArea(area);
  }
}

export class Rectangle extends Basic {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    this.checkAllSides([width, height]);
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
