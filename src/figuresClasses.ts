type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type Size = number;
type Area = number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): Area;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: Size,
    public b: Size,
    public c: Size,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some size has wrong value <= 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('longest side of triangle >= number of other two');
    }
  }

  getArea(): Area {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const areaTriangle = Math
      .sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c));

    return Math.floor(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: Size,
  ) {
    if (radius <= 0) {
      throw new Error('radius has wrong value <= 0');
    }
  }

  getArea(): Area {
    const radiusCircle = this.radius ** 2 * Math.PI;

    return Math.floor(radiusCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: Size,
    public height: Size,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('some size has wrong value <= 0');
    }
  }

  getArea(): Area {
    const areaRectangle = this.width * this.height;

    return Math.floor(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
