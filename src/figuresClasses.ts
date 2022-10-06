type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea: () => number;
}

const roundDown = (area: number): number => Math.floor(area * 100) / 100;

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.checkSide()) {
      throw new Error('One of your side is less then 0');
    }

    if (this.checkLongestSide()) {
      throw new Error('One of your side is longest than a sum of two others');
    }
  }

  getArea():number {
    const { a, b, c } = this;

    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return roundDown(area);
  }

  checkSide(): boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return true;
    }

    return false;
  }

  checkLongestSide(): boolean {
    if (this.a >= this.b + this.c
    || this.b >= this.a + this.c
    || this.c >= this.b + this.a) {
      return true;
    }

    return false;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Your radius is less then 0');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('Width or heigth less then 0');
    }
  }

  getArea():number {
    const area = this.width * this.height;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
