enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  'red',
  'green',
  'blue',
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
  shape: Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.triangle;

    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('The length of the side should be more than 0');
    }

    if (
      c >= a + b
      || b >= a + c
      || a >= b + c
    ) {
      throw new Error(
        'The length of the side should be more than sum of other two sides',
      );
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) * 0.5;

    return getRounded(+(Math.sqrt(
      semiPerim
      * (semiPerim - this.a)
      * (semiPerim - this.b)
      * (semiPerim - this.c),
    )).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.circle;

    if (radius <= 0) {
      throw new Error('The length of the radius should be more than 0');
    }
  }

  getArea(): number {
    return getRounded(
      +(this.radius * this.radius * Math.PI).toFixed(3),
    );
  }
}

export class Rectangle implements Figure {
  shape: Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error('The length of the sides should be more than 0');
    }
  }

  getArea(): number {
    return getRounded(+(this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
