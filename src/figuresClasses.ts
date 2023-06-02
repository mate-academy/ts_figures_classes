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
    this.validateTriangle();
  }

  validateTriangle():boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid side value of triangle');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('Sides cannot form a triangle');
    }

    return true;
  }

  getArea():number {
    const { a, b, c } = this;
    const p:number = (a + b + c) / 2;
    const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));

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
