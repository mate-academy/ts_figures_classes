type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side length should be a positive number');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Value must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(area) / 100;
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
      throw new Error('Side length should be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
