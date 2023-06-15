type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
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
    const sortedSides = [a, b, c].sort((x, y) => x - y);

    if (
      [a, b, c].some((value) => value <= 0)
      || sortedSides[0] + sortedSides[1] <= sortedSides[2]
    ) {
      throw new Error(
        'Every side must be greater than zero'
        + 'and the longest one must be shorter than sum of tho others.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.trunc(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than zero.');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ([width, height].some((value) => value <= 0)) {
      throw new Error('Every side must be greater than zero');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.trunc(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
