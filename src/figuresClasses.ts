enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea:() => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    public color: Color,
    ...args: [number, number, number]
  ) {
    if (args.some((side: number) => side <= 0)) {
      throw new Error('Some side can not be les then 0');
    }

    const biggestSide: number = Math.max(...args);

    if (args.reduce((
      acc: number,
      side: number,
    ) => acc + side) - biggestSide <= biggestSide) {
      throw new Error('One side ot triangle can not be mo than two others');
    }

    [this.a, this.b, this.c] = args;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  public r: number;

  constructor(
    public color: Color,
    r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius can not be les then 0');
    }
    this.r = r;
  }

  getArea(): number {
    const area: number = Math.PI * this.r ** 2;

    return Math.floor(area * 100) / 100;
    // return area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  public width: number;

  public hight: number;

  constructor(
    public color: Color,
    ...args: [number, number]
  ) {
    if (args.some((side: number) => side <= 0)) {
      throw new Error('Some side can not be les then 0');
    }

    [this.width, this.hight] = args;
  }

  getArea(): number {
    const area: number = this.width * this.hight;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
