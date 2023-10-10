type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0.');
    }

    if (a >= b + c || b >= a
      + c || c >= a + b) {
      throw new Error('The longest side of the triangle should be'
      + 'smaller than a sum of two others.');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.floor(Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than 0.');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area: number = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
