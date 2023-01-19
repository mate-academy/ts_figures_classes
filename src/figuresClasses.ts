type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundingArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortedSides = [a, b, c].sort((prev, next) => prev - next);

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]
    || a === 0
    || b === 0
    || c === 0
    ) {
      throw new Error('Failed because of wrong parametr(s)');
    }
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return roundingArea(area);
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Failed because of wrong parametr(s)');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius) ** 2;

    return roundingArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Failed because of wrong parametr(s)');
    }
  }

  getArea(): number {
    return roundingArea(this.heigth * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
