type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    } else if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The longest side of the triangle should be'
      + 'smaller than a sum of two others');
    }
  }

  getArea(): number {
    const {
      a,
      b,
      c,
    } = this;

    const s: number = (a + b + c) / 2;

    const area: number = Math.sqrt(s * (s - a)
    * (s - b) * (s - c));

    return +(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return +Math.trunc((Math.PI * (radius * radius) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    this.shape = 'rectangle';

    if (heigth <= 0 || width <= 0) {
      throw new Error('All sides must be greater than 0');
    }
  }

  getArea(): number {
    const {
      width,
      heigth,
    } = this;

    return +(width * heigth).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
