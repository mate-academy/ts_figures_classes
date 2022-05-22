export enum Shape {
  TriangleShape = 'triangle',
  CircleShape = 'circle',
  RectangleShape = 'rectangle',
}

export enum Color {
  RedColor = 'red',
  GreenColor = 'green',
  BlueColor = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  public shape = Shape.TriangleShape;

  aSide: number;

  bSide: number;

  cSide: number;

  public color: Color;

  constructor(
    color: Color,
    aSide: number,
    bSide: number,
    cSide: number,
  ) {
    this.aSide = aSide;
    this.bSide = bSide;
    this.cSide = cSide;
    this.color = color;

    if (aSide + bSide <= cSide
    || bSide + cSide <= aSide
    || cSide + aSide <= bSide) {
      throw new Error('Wrong length of sides');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.aSide + this.bSide + this.cSide) / 2;

    return Math.floor(Math.sqrt(halfPerimeter
    * (halfPerimeter - this.aSide)
    * (halfPerimeter - this.bSide)
    * (halfPerimeter - this.cSide)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.CircleShape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('fail radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.RectangleShape;

  public color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('fail sides');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
