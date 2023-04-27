enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: string;
  shape: Shape;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: string,
    private a: number,
    private b:number,
    private c: number,
  ) {
    this.checkSides();
  }

  private checkSides(): void {
    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('All values should be positive');
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('Impossible to create triangle from that values');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: string,
    private radius: number,
  ) {
    this.checkSides();
  }

  private checkSides(): void {
    if (this.radius < 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    this.checkSides();
  }

  private checkSides(): void {
    if (this.width < 0 || this.height < 0) {
      throw new Error('Width and height should be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
