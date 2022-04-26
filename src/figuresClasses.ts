enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Circle = 'circle',
  Triangle = 'triangle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('value can`t be 0 and <');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('value can`t be 0 and <');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('sum of cathets cant be less then hypotenuse');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c)) * 100,
    ) / 100;
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('value can`t be 0 and <');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
