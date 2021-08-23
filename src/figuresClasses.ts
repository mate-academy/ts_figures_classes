type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side should be positive');
    }

    if (a + b <= c
      || a + c <= b
      || c + b <= a) {
      throw new Error('Your sides is not create triangle');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)).toFixed(2);

    return +area;
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    const pi = +Math.PI.toFixed(2);
    const area = +(pi * this.radius ** 2).toFixed(2);

    return area;
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Side should be positive');
    }
  }

  getArea(): number {
    const area = +(this.a * this.b).toFixed(2);

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
