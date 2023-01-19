function getRound(result: number): number {
  return Math.floor(result * 100) / 100;
}

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
    const sides = [a, b, c].sort((i, k) => i - k);

    if (sides[2] >= sides[1] + sides[0]
      || sides.some((side) => side <= 0)
    ) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const triangleHalfPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      triangleHalfPerimeter
      * (triangleHalfPerimeter - this.a)
      * (triangleHalfPerimeter - this.b)
      * (triangleHalfPerimeter - this.c),
    );

    return getRound(triangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return getRound((this.radius ** 2) * Math.PI);
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return getRound(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
