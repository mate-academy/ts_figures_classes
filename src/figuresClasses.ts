export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One or more sides of this triangle cannot be <= 0');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(
        'The side cannot be greater than the sum of the other two!',
      );
    }
  }

  getArea():number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c),
    );
    const RoundedSquare = Math.round(square * 100) / 100;

    return RoundedSquare;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be <= 0>');
    }
  }

  getArea(): number {
    const circleSquare = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return circleSquare;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color:Color,
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One or more sides cannot be <= 0');
    }
  }

  getArea(): number {
    const rectangleSquare = this.width * this.height;

    return rectangleSquare;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
