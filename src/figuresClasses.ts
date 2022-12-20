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

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error('Invalid side values');
    }
  }

  getArea(): number {
    return this.length * this.width;
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error('Invalid Side Values');
    }

    if (x >= y + z || y >= x + z || z >= x + y) {
      throw new Error('Single side can\'t be more'
      + ' than sum of the other sides');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.x + this.y + this.z) / 2;
    const triangleArea = Math.floor(
      Math.sqrt(semiPerimeter
        * (semiPerimeter - this.x)
        * (semiPerimeter - this.y)
        * (semiPerimeter - this.z)) * 100,
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
      throw new Error('Radius value is invalid');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
