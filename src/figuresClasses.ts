
type Color = 'red' | 'green' | 'blue';
type Snape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Snape,
  color: Color,

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Snape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesSum = this.a + this.b + this.c;
    const maxSide = Math.max(this.a, this.b, this.c);
    const sumTwoSmallerSides = sidesSum - maxSide;

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || maxSide >= sumTwoSmallerSides
    ) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const sidesSum = this.a + this.b + this.c;
    const halfPerimeter = sidesSum / 2;

    return Math.floor(Math.sqrt(sidesSum / 2
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Snape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Snape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`sides ${a} or ${b} can't form a rectangle`);
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
