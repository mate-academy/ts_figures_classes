type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function makeFloorArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((a1, a2) => a1 - a2);

    if (a <= 0 || b <= 0 || c <= 0 || sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b} and ${c} are wrong`);
    }
  }

  getArea: () => number = () => {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return makeFloorArea(area);
  };
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius ${radius} is wrong`);
    }
  }

  getArea: () => number = () => {
    const area = this.radius * this.radius * Math.PI;

    return makeFloorArea(area);
  };
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Sides ${a} and ${b} are wrong`);
    }
  }

  getArea: () => number = () => {
    const area = this.a * this.b;

    return makeFloorArea(area);
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
