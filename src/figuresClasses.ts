type Color = 'red'| 'green' | 'blue';
type Shape = 'triangle'| 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function round(square: number): number {
  return Math.floor(square * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be natural numbers');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error('Specify the right sides of the triangle');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('You are trying to draw the non-existent');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('You are trying to draw the non-existent');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
