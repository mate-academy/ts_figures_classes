enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundedNum(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Enter the correct values for sides');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Can not build the triangle!');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const { a, b, c } = this;
    const area = Math.sqrt((semiPerimeter - a) * (semiPerimeter - b)
      * (semiPerimeter - c) * semiPerimeter);

    return roundedNum(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Can not build the circle!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundedNum(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Can not build the rectangle!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedNum(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
