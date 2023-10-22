export type Shape = 'triangle' | 'circle' | 'rectangle';
export type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: FigureColor;
  getArea(): number;
}

function roundToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: FigureColor,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid length side');
    }

    const sortedSides: number[] = [a, b, c].sort(
      (first, second) => first - second,
    );

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return roundToHundredths(area);
  }
}

//
export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: FigureColor, private radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundToHundredths(area);
  }
}

//
export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: FigureColor,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid dimensions');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
