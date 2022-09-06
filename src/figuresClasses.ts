// import { type } from "os";

type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle ='triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

interface TriangleSides {
  a: number,
  b: number,
  c: number,
}

interface CircleRadius {
  radius: number,
}

interface RectangleSides {
  width: number,
  height: number,
}

function getRoundedSquare(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure, TriangleSides {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Enter valid data');
    }

    if (this.cantForm()) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  cantForm(): boolean {
    return Math.max(this.a, this.b, this.c) * 2 >= this.a + this.b + this.c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return getRoundedSquare(area);
  }
}

export class Circle implements Figure, CircleRadius {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getRoundedSquare(area);
  }
}

export class Rectangle implements Figure, RectangleSides {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRoundedSquare(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
