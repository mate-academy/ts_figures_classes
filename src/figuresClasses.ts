enum Shapes {
  circle = 'circle',
  triangle = 'triangle',
  rectangle = 'rectangle',
}

enum Colors {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        'Invalid data, the value of the side of the triangle cannot be negative',
      );
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Incorrect value(s) for triangle');
    }
  }

  getArea() {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        'Invalid data, the radius of the circle cannot be negative',
      );
    }
  }

  getArea() {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error(
        'Invalid data, the value of the side of the rectangle cannot be negative',
      );
    }
  }

  getArea() {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
