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
  protected isOk: boolean = true;

  constructor(
    readonly shape: Shapes,
    public color: Colors,
  ) {
    this.shape = shape;
    this.color = color;
  }

  public checkLengths(...values: number[]): void {
    this.isOk = values.every((value) => value > 0);

    if (!this.isOk) {
      throw new Error('Every figure length must be > 0!');
    }
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
    this.checkLengths(a, b, c);
    this.checkPossible();
  }

  private checkPossible(): void {
    const longest: number = Math.max(this.a, this.b, this.c);

    this.isOk = this.a + this.b + this.c - longest > longest;

    if (!this.isOk) {
      throw new Error('Impossible triangle!');
    }
  }

  public getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );
  }
}
export class Circle extends BaseFigure {
  constructor(
    public color: Colors,
    public radius: number,
  ) {
    super(Shapes.Circle, color);
    this.checkLengths(radius);
  }

  public getArea(): number {
    return Math.trunc(this.radius ** 2 * Math.PI * 100) / 100;
  }
}
export class Rectangle extends BaseFigure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    super(Shapes.Rectangle, color);
    this.checkLengths(width, height);
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
