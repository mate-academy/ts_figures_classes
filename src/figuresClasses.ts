enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;

  getArea(): number;
}

const isNegative = (...arg: number[]): void => {
  if ([...arg].some((side:number): boolean => side <= 0)) {
    throw new Error('Length should be > 0');
  }
};

export class Triangle implements Figure {
  shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    isNegative(a, b, c);
    this.isTriangle();
  }

  private isTriangle(): void {
    const sides: number[] = [this.a, this.b, this.c]
      .sort((first, second) => second - first);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('Can not create a Triangle with those sides');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    isNegative(radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    isNegative(a, b);
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
