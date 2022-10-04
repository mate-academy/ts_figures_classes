type Color = 'red' | 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const sides = [a, b, c];
    const perimeter = a + b + c;

    if (sides.some((side) => side <= 0)) {
      throw new Error('The input value of some sides <= 0');
    }

    if (sides.some((side) => side >= perimeter - side)) {
      throw new Error('The input sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The input value of radius <= 0');
    }
  }

  getArea(): number {
    return round(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if ([width, height].some((side) => side <= 0)) {
      throw new Error('The input value of some sides <= 0');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
