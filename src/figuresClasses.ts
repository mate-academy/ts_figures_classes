enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: string;
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
    const sortSide = [this.a, this.b, this.c].sort((acc, prev) => acc - prev);

    if (
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      sortSide[2] >= sortSide[0] + sortSide[1]
    ) {
      throw new Error(
        'Triangle sides must be positive and satisfy the triangle inequality.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const areaTriangle = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return +areaTriangle.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be a positive number.');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

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
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive numbers.');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
