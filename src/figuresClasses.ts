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
  shape: string,
  color: string,
  getArea(): number,
}

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle sides');
    }
  }

  private isValidTriangle(): boolean {
    const maxSideA = this.b + this.c > this.a;
    const maxSideB = this.a + this.c > this.b;
    const maxSideC = this.a + this.b > this.c;

    return maxSideA && maxSideB && maxSideC;
  }

  getArea(): number {
    const perimetrTriangle = (this.a + this.b + this.c) / 2;

    const areaTriangle = Math
      .sqrt(
        perimetrTriangle
        * (perimetrTriangle - this.a)
        * (perimetrTriangle - this.b)
        * (perimetrTriangle - this.c),
      );

    return roundArea(areaTriangle);
  }
}

export class Circle implements Figure {
  public shape: Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

    return roundArea(areaCircle);
  }
}

export class Rectangle implements Figure {
  public shape: Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle side');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
