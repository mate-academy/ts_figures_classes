type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape:Shape;
  color:Color;

  getArea():number;
}

function isSideCorrect(...args:number[]):boolean {
  return args.some((arg:number) => {
    return arg <= 0;
  });
}

function rounder(value:number | string):number {
  return Math.floor(+value * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (isSideCorrect()) {
      throw new Error('Incorrect side length parameter');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error(`${a}, ${b} and ${c} can't be a triangle`);
    }
  }

  getArea():number {
    const getHalf: number = (this.a + this.b + this.c) / 2;

    return rounder(Math.sqrt(
      getHalf * (getHalf - this.a) * (getHalf - this.b) * (getHalf - this.c),
    ));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isSideCorrect(radius)) {
      throw new Error('Incorrect radius. Radius must be greater then zero');
    }
  }

  getArea(): number {
    return rounder(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (isSideCorrect(height, width)) {
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
