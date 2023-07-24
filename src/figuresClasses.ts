enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'green',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

const getRounded = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side length should be more than 0');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(
        'The side length should be less than the sum of other two sides',
      );
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) * 0.5;
    const area = semiPerim * (semiPerim - this.a)
      * (semiPerim - this.b) * (semiPerim - this.c);

    return getRounded(Math.sqrt(area));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius should be more than 0');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return getRounded(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The side length should be more than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRounded(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
