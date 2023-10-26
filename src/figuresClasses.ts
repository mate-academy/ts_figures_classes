export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= (b + c) || b >= (c + a)
      || c >= (a + b) || a <= 0
      || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const areaTriangle = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(areaTriangle
        * (areaTriangle - this.a) * (areaTriangle - this.b)
        * (areaTriangle - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.a * this.a);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.heigth * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
