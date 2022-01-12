enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Enter valid sides');
    }

    if (this.a + this.b <= c
      || this.a + this.c <= b
      || this.b + this.b <= c) {
      throw new Error('You cannot make triangle with those sides');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.floor(
      Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c)) * 100,
    ) / 100;

    return areaOfTriangle;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Radius should be > 0');
    }
  }

  getArea():number {
    const areaOfCircle = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return areaOfCircle;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Sides should be > 0');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.width * this.height;

    return areaOfRectangle;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
