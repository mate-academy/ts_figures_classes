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

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side can\'t be <= 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side can\'t be less than sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.floor(
      Math.sqrt(semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c)) * 100,
    ) / 100;

    return triangleArea;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be <= 0');
    }
  }

  getArea(): number {
    const circleArea = Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;

    return circleArea;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error('Length or width can\'t be <= 0');
    }
  }

  getArea(): number {
    const rectangleArea = this.length * this.width;

    return rectangleArea;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
