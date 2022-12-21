type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b < 0 || c <= 0) {
      throw new Error('The lenght of slide can not be less than zero');
    }

    if (a + b <= c || b + c <= a || a + c <= c) {
      throw new Error(`sides ${a}, ${b} and ${c}can't form a triangle`);
    }
  }

  getArea(): number {
    const semiperimeter = (1 / 2) * (this.a + this.b + this.c);
    const area = Math.trunc(Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
       * (semiperimeter - this.b)
       * (semiperimeter - this.c)) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The lenght of radius can not be less than zero');
    }
  }

  getArea(): number {
    const area = Math.trunc(((this.radius ** 2) * Math.PI) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The lenght of slide can not be less than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
