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

abstract class BaseFigure implements Figure {
  shape: Shape;
  abstract color: Color;
  abstract getArea(): number;

  protected allSide(sides: number[]): void {
    if (sides.some((value: number) => value <= 0)) {
      throw new Error(
        `figure of shape ${this.shape} should have only positive params`,
      );
    }
  }
}

export class Triangle extends BaseFigure {
  readonly shap = Shape.Triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    super();

    this.allSide([a, b, c]);

    const SortSide: number[] = [a, b, c]
    .sort((prevSide: number, currentSide: number) => prevSide - currentSide);

    if (SortSide[0] >= SortSide[1] + SortSide[2]) {
      throw new Error('side is not correct');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      perimetr
      * (perimetr - this.a)
      * (perimetr - this.b)
      * (perimetr - this.c)
    );

    return Number(area.toFixed(2));
  }

}

export class Circle extends BaseFigure {
  readonly shape: Shape.Circle;

  constructor(
    public color: Color,
    public raduis: number,
  ) {
    super();

    this.allSide([raduis]);
  }

  getArea(): number {
    const area = Math.PI * this.raduis ** 2;
    
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  readonly shape: Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    this.allSide([this.width, this.height])
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }

}

export function getInfo(figure: BaseFigure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
}
