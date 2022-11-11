enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export function roundNumber(digit: number): number {
  return Math.floor(digit * 100) / 100;
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
      throw new Error('Side length can\'t be 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('A side can\'t be >= than other sides');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return roundNumber(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be equal to zero or less than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundNumber(area);
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
      throw new Error('Side can\'t be equal to zero or less than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
