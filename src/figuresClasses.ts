enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape:Shape,
  color:Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
        || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Each side length should be > 0 and'
        + 'be grater than sum of two else');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    return Math.round((Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b)
      * (halfP - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be > 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
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
      throw new Error('Each side should be > 0');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
