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
    if (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b
    ) {
      throw new Error('One of the values ​​of the triangle cannot be'
       + 'less than zero or the sum of its two sides'
       + 'cannot be greater than or equal to the third');
    }
  }

  getArea(): number {
    const halfOfPerimetr = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(halfOfPerimetr * (halfOfPerimetr - this.a)
      * (halfOfPerimetr - this.b) * (halfOfPerimetr - this.c));

    return Math.round(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('One of the values ​​of the circle cannot be'
       + 'less than zero');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of the values ​​of the rectangle'
      + 'cannot be less than zero');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
