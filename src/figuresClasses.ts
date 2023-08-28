enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  sides: number[];

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('the longest side must be >= than a sum of two others');
    }
    this.shape = Shape.Triangle;
    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    const area = Math.sqrt(s * (s - this.sides[0])
    * (s - this.sides[1])
    * (s - this.sides[2]));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = Shape.Circle;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.shape = Shape.Rectangle;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
