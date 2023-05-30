type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((this.a + this.b) <= this.c
    || (this.a + this.c) <= this.b
    || (this.b + this.c) <= this.a) {
      throw new Error(
        'Can not calculate!!!',
      );
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        'we cannot calculate the area since the sides are less than 0',
      );
    }
  }

  getArea(): number {
    const findArea = (this.a + this.b + this.c) / 2;

    return (Math.floor(
      (Math.sqrt(findArea
        * (findArea - this.a)
        * (findArea - this.b) * (findArea - this.c)) * 100),
    )) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius length <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Any length is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
