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
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of the triangle must be greater than zero');
    }

    if (this.a >= (this.b + this.c)
      || this.b >= (this.a + this.c)
      || this.c >= (this.a + this.b)
    ) {
      throw new Error('One side cannot be bigger than the other sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const squareTriangle = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c));

    return Math.round(100 * squareTriangle) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('enter valid radius');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * (this.radius * this.radius);

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('enter valid width');
    }

    if (height <= 0) {
      throw new Error('enter valid height');
    }
  }

  getArea(): number {
    const areaRectangle = this.width * this.height;

    return areaRectangle;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
