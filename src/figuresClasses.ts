enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Either side must be greater than zero');
    }

    if (this.c >= (this.a + this.b)) {
      throw new Error('Sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const halfPerimeter
    : number = (this.a + this.b + this.c) * 0.5;

    const s: number = Math.sqrt(
      halfPerimeter
       * (halfPerimeter
         - this.a) * (halfPerimeter
         - this.b) * (halfPerimeter
         - this.c),
    );

    return Math.floor(s * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: string,
    public r: number,
  ) {
    if (this.r < 0) {
      throw new Error('Radius should be greater then 0');
    }
  }

  getArea(): number {
    const num: number = Math.PI * (this.r * this.r);

    return Math.floor(num * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (this.a < 0 || this.b < 0) {
      throw new Error('Either side must be greater than zero');
    }
  }

  getArea(): number {
    const num = this.a * this.b;

    return Math.floor(num * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
