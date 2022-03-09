
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((this.a <= 0 || this.b <= 0 || this.c <= 0) || (
      this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b)) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c)).toFixed(2);
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return +(Number(Math.PI.toFixed(2)) * this.radius ** 2).toFixed(2);
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public heigth: number,
    public width: number,
  ) {
    if (this.heigth <= 0 || this.width <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return +(this.width * this.heigth).toFixed(2);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
