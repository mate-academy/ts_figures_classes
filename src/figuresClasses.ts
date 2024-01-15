type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One or more sides of the triangle equals 0, try again');
    }

    [this.a, this.b, this.c] = [a, b, c].sort((sideA, sideB) => sideB - sideA);

    if (this.a >= this.b + this.c) {
      throw new Error('Not possible to construct a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;

    const areaOfTriangle = Math.sqrt(semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c));

    return Math.floor(areaOfTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius');
    }
  }

  getArea(): number {
    const areaOfCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect parameters');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.height * this.width;

    return Math.floor(areaOfRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
