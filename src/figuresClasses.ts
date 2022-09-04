
export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

function roundDownHundredths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sorted = [a, b, c].sort((first: number, second: number) => {
      return second - first;
    });

    if ((a <= 0 || b <= 0 || c <= 0)) {
      throw new Error('Length less than zero');
    }

    if (sorted[0] >= (sorted[1] + sorted[2])) {
      throw new Error('The longest side of a triangle'
      + 'is >= than a sum of two others');
    }
  }

  public getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return roundDownHundredths(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length less than zero');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownHundredths(area);
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    if (length <= 0 || width <= 0) {
      throw new Error('Length less than zero');
    }
  }

  public getArea():number {
    const area = this.length * this.width;

    return roundDownHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
