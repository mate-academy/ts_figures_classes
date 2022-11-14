type Color = 'red' | 'green' | 'blue';
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('One of side length less than or equal to zero');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('The longest side of a triangle'
      + ' is >= than a sum of two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter: number = (a + b + c) / 2;
    const area: number = Math.sqrt(semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b) * (semiPerimeter - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius less than or equal to zero');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
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
      throw new Error('Width or height less than or equal to zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
