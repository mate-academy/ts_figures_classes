type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [this.a, this.b, this.c];
    const longestSide = Math.max(this.a, this.b, this.c);

    const twoOther = sides.filter((side) => side !== longestSide)
      .reduce((side, sum) => side + sum);

    if (twoOther <= longestSide || sides.some((num) => num <= 0)) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const semiSum = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(semiSum * (semiSum - this.a) * (semiSum - this.b)
    * (semiSum - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const area = (Math.PI * this.radius ** 2).toFixed(3);

    return +area.slice(0, -1);
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
