type Colors = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape.triangle | Shape.circle | Shape.rectangle;
  color: Colors;
  getArea: () => number;
}

function hasTriangleWrongSize(sizes: number[]): boolean {
  const sortSizes = sizes.sort((a, b) => a - b);
  const biggestSize = sortSizes[sizes.length - 1];

  return biggestSize >= (sortSizes[0] + sortSizes[1]);
}

function audit(sizes: number[], shape: string): void {
  const wrongParam = sizes.some((el) => el <= 0);

  const wrongSize = shape === Shape.triangle
    ? hasTriangleWrongSize(sizes)
    : false;

  const cantFormTriangle = (shape === Shape.triangle && wrongParam)
    || wrongSize;

  if (cantFormTriangle) {
    throw new Error(
      `sides ${sizes[0]}, ${sizes[1]} and ${sizes[3]} can't form a triangle`,
    );
  }

  if (shape === Shape.rectangle && wrongParam) {
    throw new Error(
      `sides ${sizes[0]} and ${sizes[1]} are wrong for creating a rectangle`,
    );
  }

  if (shape === Shape.circle && wrongParam) {
    throw new Error(
      `radius ${sizes[0]} is wrong for creating a circle`,
    );
  }
}

export class Triangle implements Figure {
  shape: Shape.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    audit([a, b, c], Shape.triangle);

    this.shape = Shape.triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape.circle;

  constructor(public color: Colors, public radius: number) {
    audit([radius], Shape.circle);

    this.shape = Shape.circle;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const pi = Math.PI;
    const square = pi * (this.radius ** 2) * 100;

    return Math.floor(square) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    audit([width, height], Shape.rectangle);

    this.shape = Shape.rectangle;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
