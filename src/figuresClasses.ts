enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('0 or a negative number can\'t be passed');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error(`sides ${this.a}, `
        + `${this.b} and ${this.c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('0 or a negative number can\'t be passed');
    }
  }

  getArea(): number {
    return Math.round((3.14 * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('0 or a negative number can\'t be passed');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
