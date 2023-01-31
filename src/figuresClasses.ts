enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundNumber(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The triangle side values must be greater than 0');
    }

    if (a >= b + c || b >= a + b || c >= a + b) {
      throw new Error(`
        The side of the triangle must be less than the sum of two others
      `);
    }
  }

  getArea(): number {
    const semiP = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(semiP * (
      semiP - this.a) * (semiP - this.b) * (semiP - this.c));

    return roundNumber(area);
  }
}

export class Circle {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius value must be greater than 0.');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return roundNumber(area);
  }
}

export class Rectangle {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`
        The rectangular width and height values must be greater than 0.
      `);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
