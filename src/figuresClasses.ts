type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shapes;
  color: Colors;
}
class BaseFigure {
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
}

export class Triangle extends BaseFigure {
  readonly shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super('triangle', color);
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
