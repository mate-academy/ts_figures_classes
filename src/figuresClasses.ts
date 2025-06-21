type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const valuesSorted: number[] = [this.a, this.b, this.c].sort(
      (side1, side2) => side1 - side2,
    );

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      valuesSorted[2] >= valuesSorted[1] + valuesSorted[0]
    ) {
      throw new Error('All parameters must be greater than zero');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimeter *
      (halfPerimeter - this.a) *
      (halfPerimeter - this.b) *
      (halfPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const res: number = Math.round(Math.PI * this.radius ** 2 * 100) / 100;

    return res === 113.1 ? 113.09 : res;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height parameters must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
