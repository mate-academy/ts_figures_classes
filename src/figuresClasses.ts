type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape
  color: Color
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
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || b + c <= a
      || a + c <= b
    ) {
      throw new Error('invalid numbers');
    }
  }

  getArea(): number {
    const semiperimeterTriangle = 0.5 * (this.a + this.b + this.c);
    const areaTriangle = Math.floor(
      Math.sqrt(
        semiperimeterTriangle * (semiperimeterTriangle - this.a)
        * (semiperimeterTriangle - this.b)
        * (semiperimeterTriangle - this.c),
      ) * 100,
    ) / 100;

    return areaTriangle;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid number');
    }
  }

  getArea(): number {
    const areaCircle = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return areaCircle;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public wigth: number,
    public height: number,
  ) {
    if (wigth <= 0 || height <= 0) {
      throw new Error('invalid numbers');
    }
  }

  getArea(): number {
    const areaRectangle = this.wigth * this.height;

    return areaRectangle;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
