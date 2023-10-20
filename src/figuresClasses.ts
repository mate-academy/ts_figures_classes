enum Color {
  red = 'red',
  green = 'green',
  blue = 'blur',
}

enum Shape {
  Triangle = 'Triangle',
  Circle = 'gCircle',
  Rectangle = 'Rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Invalid triangle: sides ${a},`
      + `${b}, and ${c} cannot form a ${this.shape}`);
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semi * (semi - this.a)
    * (semi - this.b) * (semi - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle: radius must be greater than 0');
    }
  }

  getArea(): number {
    const square = Math.PI * (2 * this.radius);

    return Math.round(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle:'
      + 'width and height must be greater than 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
