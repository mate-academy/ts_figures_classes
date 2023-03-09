
type Colors = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

function validateTriangleLength(...shapeSide: number[]): boolean {
  const sumSides = shapeSide
    .reduce((sideOne: number, sideTwo: number) => sideOne + sideTwo);

  return shapeSide.some((side: number) => side >= (sumSides - side));
}

function validateLength(...lengths : number[]): boolean {
  return Math.min(...lengths) <= 0;
}

function helperArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (validateLength(a, b, c)) {
      throw new Error('Length of triangle sides should be greater than 0');
    }

    if (validateTriangleLength(a, b, c)) {
      throw new Error('The longest side of the triangle must be shorter than'
       + ' the sum of the other two');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return helperArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (validateLength(radius)) {
      throw new Error('Radius of circle should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return helperArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (validateLength(width, height)) {
      throw new Error('Width and height of rectangle should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return helperArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
