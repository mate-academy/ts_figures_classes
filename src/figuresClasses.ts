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

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('every side must be bigger than 0');
    }

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

    return +(area.toFixed(2));
  }
}

export class Circle extends BasedForm {
  readonly shape = Shape.Circle;

  constructor(
    public color:Color,
    public radius: number,
  ) {
    super();

    if (this.radius <= 0) {
      throw new Error('wrong radius of circle');
    }
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

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('some side is to small');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +(area.toFixed(2));
  }
}

export function getInfo(figure: BasedForm): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
