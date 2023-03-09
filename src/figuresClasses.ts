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
  shape : Shape;
  color : Color;
  getArea():number;
}

abstract class BasedForm implements Figure {
  abstract shape : Shape;

  abstract color: Color;

  abstract getArea(): number;

  protected checkAllSides(sides: number[]): void {
    if (sides.some((value: number) => value <= 0)) {
      throw new Error(
        `figure of shape ${this.shape} should have only positive params`,
      );
    }
  }
}

export class Triangle extends BasedForm {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    super();

    this.checkAllSides([a, b, c]);

    const sortedSides: number[] = [a, b, c]
      .sort((aSide: number, bSide: number) => bSide - aSide);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error('some side is uncorrect');
    }
  }

  getArea(): number {
    const semiperimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimetr
      * (semiperimetr - this.a)
      * (semiperimetr - this.b)
      * (semiperimetr - this.c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle extends BasedForm {
  readonly shape = Shape.Circle;

  constructor(
    public color:Color,
    public radius: number,
  ) {
    super();

    this.checkAllSides([radius]);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends BasedForm {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    this.checkAllSides([this.height, this.width]);
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: BasedForm): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
