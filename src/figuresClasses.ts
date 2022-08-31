enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

abstract class BaseFigure implements Figure {
  constructor(
    readonly shape: Shapes,
    public color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }

  static checkLengths(...values: number[]): void {
    const correctValues = values.every((value) => value > 0);

    if (!correctValues) {
      throw new Error('Every figure length must be > 0!');
    }
  }

  static roundArea(area: number): number {
    return Math.trunc(area * 100) / 100;
  }

  abstract getArea(): number;
}

export class Triangle extends BaseFigure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(Shapes.Triangle, color);
    BaseFigure.checkLengths(a, b, c);
    this.checkPossible();
  }

  private checkPossible(): void {
    const longest: number = Math.max(this.a, this.b, this.c);

    const isPosiible = this.a + this.b + this.c - longest > longest;

    if (!isPosiible) {
      throw new Error('Impossible triangle!');
    }
  }

  public getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return BaseFigure.roundArea(area);
  }
}

export class Circle extends BaseFigure {
  constructor(
    public color: Colors,
    public radius: number,
  ) {
    super(Shapes.Circle, color);
    BaseFigure.checkLengths(radius);
  }

  public getArea(): number {
    const area: number = this.radius ** 2 * Math.PI;

    return BaseFigure.roundArea(area);
  }
}

export class Rectangle extends BaseFigure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    super(Shapes.Rectangle, color);
    BaseFigure.checkLengths(width, height);
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    return BaseFigure.roundArea(area);
  }
}

export function getInfo(figure: BaseFigure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
