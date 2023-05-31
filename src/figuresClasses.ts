enum Figures {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Figures,
  color: Colors,
  getArea():number;
}

export class Triangle implements Figure {
  shape: Figures = Figures.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid side value of triangle');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea():number {
    const p:number = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figures = Figures.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius value');
    }
  }

  getArea():number {
    const circleArea = this.radius ** 2 * Math.PI;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figures = Figures.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid rectangle side value');
    }
  }

  getArea():number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  if (!figure) {
    throw new Error('Invalid object');
  }

  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
