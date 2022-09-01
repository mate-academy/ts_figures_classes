type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea():number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect side length parameter');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error(`${a}, ${b} and ${c} can't be a triangle`);
    }
  }

  getArea():number {
    const getHalf: number = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      getHalf * (getHalf - this.a) * (getHalf - this.b) * (getHalf - this.c),
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius. Radius must be greater then zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('width and height must be greater then zero');
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
