type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

function roundToDec(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const longestSide: number = Math.max(a, b, c);

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || longestSide >= ((a + b + c) - longestSide)
    ) {
      throw new Error('Invalid Triangle');
    }
  }

  getArea(): number {
    const perimeterHalf: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      perimeterHalf
      * (perimeterHalf - this.a)
      * (perimeterHalf - this.b)
      * (perimeterHalf - this.c),
    );

    return roundToDec(area);
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid Circle');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return roundToDec(area);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid Rectangle');
    }
  }

  getArea(): number {
    return roundToDec(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
