type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export abstract class BasicFigure implements Figure {
  shape: Shapes;

  color: Colors;

  constructor(shape: Shapes, color: Colors) {
    this.color = color;
    this.shape = shape;
  }

  abstract getArea(): number;
}

export class Triangle extends BasicFigure {
  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(Shapes.Triangle, color);

    const maxValue: number = Math.max(this.a, this.b, this.c);
    const sumOfOthersValues: number = this.a + this.b + this.c - maxValue;

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      maxValue >= sumOfOthersValues
    ) {
      throw new Error(
        'Values must be > 0 and value of any cannot be more than sum of others',
      );
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimetr *
        (halfPerimetr - this.a) *
        (halfPerimetr - this.b) *
        (halfPerimetr - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle extends BasicFigure {
  constructor(
    color: Colors,
    public radius: number,
  ) {
    super(Shapes.Circle, color);

    if (this.radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const area: number = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends BasicFigure {
  constructor(
    color: Colors,
    public width: number,
    public height: number,
  ) {
    super(Shapes.Rectangle, color);

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be > 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
