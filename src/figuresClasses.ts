function getSum(...params: number[]): number {
  return params.reduce((acc, curr) => acc + curr, 0);
}

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

export interface Figure {
  shape: Shape
  color: 'red' | 'green' | 'blue'
  getArea(): number
}

export class Triangle implements Figure {
  shape = Shape.TRIANGLE;

  constructor(
    public color: Figure['color'],
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const sides = [a, b, c];

    if (sides.some((item) => item <= 0)) {
      throw new Error('Some value is <= 0');
    }

    const maxSide = Math.max(...sides);
    const maxSideIndex = sides.indexOf(maxSide);

    const restSides = [
      ...sides.slice(0, maxSideIndex),
      ...sides.slice(maxSideIndex + 1),
    ];

    const sum = getSum(...restSides);

    if (maxSide >= sum) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape = Shape.CIRCLE;

  constructor(
    public color: Figure['color'],
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius value is <= 0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape = Shape.RECTANGLE;

  constructor(
    public color: Figure['color'],
    protected width: number,
    protected height: number,
  ) {
    if ([width, height].some((item) => item <= 0)) {
      throw new Error('Some value is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
