type Color = 'red' | 'green' | 'blue';

enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  shape: ShapeType;
  color: Color;
  getArea(): number;
}

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: ShapeType = ShapeType.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Wrong, sides of triangle can not form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong, sides must be positive');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: ShapeType = ShapeType.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = ShapeType.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong width or height');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return area;
  }
}

export function getInfo(figure: ShapeType): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
