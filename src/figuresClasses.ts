
export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter: number = (a + b + c) / 2;

    return Math.floor(Math.sqrt(halfPerimeter * (halfPerimeter - a)
    * (halfPerimeter - b) * (halfPerimeter - c)) * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the inserted lengthes is <= 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error("Inserted side lengthes can't form a triangle");
    }
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter correct radius value');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width > height) {
      throw new Error('width must be <  height');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Enter valid length, it can not be rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
