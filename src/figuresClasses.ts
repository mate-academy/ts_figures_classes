enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle {
  public shape = Shape.triangle;

  public getArea = (): number => {
    const { a, b, c } = this;
    const semisum = (a + b + c) / 2;

    return Math.floor(Math
      .sqrt(semisum * (semisum - a) * (semisum - b) * (semisum - c))
       * 100) / 100;
  };

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sideSum = a + b + c;
    const maxSide = Math.max(a, b, c);

    if (sideSum - maxSide <= maxSide) {
      throw new Error('Enter valid triangle sides!');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side of the triangle must not be equal "0"!');
    }
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  public getArea: Function = (): number => {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  };

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle must not be equal "0"!');
    }
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  public getArea = (): number => {
    const { width, height } = this;

    return width * height;
  };

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('The width of the rectangle must not be equal "0"!');
    }

    if (height <= 0) {
      throw new Error('The hight of the rectangle must not be equal "0"!');
    }
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
