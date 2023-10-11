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
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c));

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
    return +Math.trunc((Math.PI * (this.radius * this.radius) * 100)) / 100;
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
    return +(this.width * this.heigth).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
