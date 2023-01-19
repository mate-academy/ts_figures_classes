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
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isValid()) {
      throw new Error('Invalid sides of Triangle');
    }
  }

  isValid(): boolean {
    const sides: number[] = [this.a, this.b, this.c];

    sides.sort((a, b) => b - a);

    return sides[0] < sides[1] + sides[2]
      && sides.every((num) => num !== 0);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('Invalid radius of Circle');
    }
  }

  getArea(): number {
    const r = this.radius;
    const area = (Math.PI * (r * r));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid parameters for Rectangle');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
