enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isInvalidSide = a <= 0 || b <= 0 || c <= 0;

    if (isInvalidSide) {
      throw new Error('one of the sides is <= 0');
    }

    const sortedSides = [a, b, c].sort((
      firstSide, secondSide,
    ) => secondSide - firstSide);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const halfPerimetr = 1 / 2 * (this.a + this.b + this.c);
    const area = Math.sqrt(
      halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c),
    );
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
