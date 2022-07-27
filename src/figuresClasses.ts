type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  color: Color,
}

type GetArea = () => number;

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    this.shape = 'triangle';

    if ((a <= 0) || (b <= 0) || (c <= 0)
    || (a + b <= c) || (a + c <= b) || (c + b <= a)) {
      throw new Error('length of Triangle sides are wrong!');
    }
  }

  getArea: GetArea = () => {
    const areaS = ((this.a + this.b + this.c) / 2);
    const area = Math.floor(Math.sqrt(areaS * (areaS - this.a)
     * (areaS - this.b) * (areaS - this.c)) * 100) / 100;

    return area;
  };
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius is wrong!');
    }
  }

  getArea: GetArea = () => {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  };
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,

    protected width: number,
    protected height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('length of Rectangle sides are wrong!');
    }
  }

  getArea: GetArea = () => {
    return this.width * this.height;
  };
}

type Figures = Triangle | Circle | Rectangle;

export function getInfo(figure: Figures): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
