export type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: FigureColor;
  getArea(): number;
}

function roundToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

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
      (first: number, second: number) => first - second,
    );

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c),
    );

    return roundToHundredths(area);
  }
}

//
export class Circle implements Figure {
  shape: 'circle' = 'circle';

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
  shape: 'rectangle' = 'rectangle';

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
