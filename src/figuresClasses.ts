type Shape = 'triangles' | 'circles' | 'rectangles';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides must be greater then zero');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error('sides with given length can&apos;t form a triangle');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
      * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return Math.floor(100 * areaOfTriangle) / 100;
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius must be more then zero');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius ** 2);

    return Math.floor(100 * circleArea) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides must have more then zero length');
    }
  }

  getArea(): number {
    const rectangleArea = this.height * this.width;

    return Math.floor(100 * rectangleArea) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
