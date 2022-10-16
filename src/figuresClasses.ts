enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape : Shape;
  color: Colors;
  getArea(): number;

}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color : Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c];
    const maxSide : number = Math.max(...sides);
    const sum: number = sides.filter((item : number) => item !== maxSide)
      .reduce((num1: number, num2: number) => num1 + num2, 0);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('must be greater than 0');
    }

    if (Math.max(...sides) >= sum) {
      throw new Error('must not be greater than sum');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape= Shape.Circle;

  constructor(
    public color : Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color : Colors,
    public width : number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Height and width must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
