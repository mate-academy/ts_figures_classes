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
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid side value');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid form to create triangle');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.floor(Math.sqrt(halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c)) * 100) / 100;

    return areaOfTriangle;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Invalid radius value');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    protected length: number,
    protected width: number,
  ) {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error('Invalid input');
    }
  }

  getArea(): number {
    return this.length * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
