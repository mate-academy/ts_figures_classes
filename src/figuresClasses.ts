enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = ' green',
  blue = 'blue',
}

export interface Figure {
  shape: string;
  color: Color;
  getArea: () => number;
}

function roundToTwoDecimalPlaces(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid sides length');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle proportions');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return roundToTwoDecimalPlaces(area);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius length');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundToTwoDecimalPlaces(area);
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
      throw new Error('Invalid width/height length');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
