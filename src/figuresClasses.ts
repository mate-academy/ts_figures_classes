type Color = 'red'| 'green'| 'blue';
enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const noSideLength: boolean = (a <= 0 || b <= 0 || c <= 0);
    const cantFormTriangle: boolean = a >= b + c || b >= a + c || c >= a + b;

    if (cantFormTriangle || noSideLength) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return +(area).toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  getArea(): number {
    return +(Math.floor((Math.PI * (this.radius * this.radius)) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
