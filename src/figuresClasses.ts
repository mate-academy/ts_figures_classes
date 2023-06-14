type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape?: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides
      = Object.values(this)
        .filter((value) => typeof value === 'number')
        .sort((x, y) => x - y);

    if (
      Object.values(this).some((value) => typeof value === 'number'
      && value <= 0)
      || sides[0] + sides[1] <= sides[2]
    ) {
      throw new Error('Invalid sides values');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number.isInteger(square) ? square : +square.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (
      Object.values(this).some((value) => typeof value === 'number'
      && value <= 0)
    ) {
      throw new Error('Radius is invalid');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Number.isInteger(square) ? square : Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (
      Object.values(this).some((value) => typeof value === 'number'
      && value <= 0)
    ) {
      throw new Error('The sides must be more than zero');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Number.isInteger(square) ? square : +square.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
