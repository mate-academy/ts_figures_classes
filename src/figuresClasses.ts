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
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Can not be less than 0!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Side can not be bigger than sum of two others!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +(Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of the circle can not be less than 0!');
    }
  }

  getArea(): number {
    return +(Math.floor((Math.PI * this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side can not be less than 0!');
    }
  }

  getArea(): number {
    return +(Math.floor(this.width * this.height));
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
