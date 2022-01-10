enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: ShapeType;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = ShapeType.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side value should be positive number');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side can\'t be bigger than the sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape = ShapeType.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive number');
    }
  }

  getArea(): number {
    return Math.floor(100 * ((this.radius ** 2) * Math.PI)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = ShapeType.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side value should be positive number');
    }
  }

  getArea(): number {
    return Math.floor(100 * (this.width * this.height)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
