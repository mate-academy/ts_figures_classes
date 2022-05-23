function round(value: number): number {
  return Math.floor(value * 100) / 100;
}

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

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    if (aSide + bSide <= cSide
    || bSide + cSide <= aSide
    || cSide + aSide <= bSide) {
      throw new Error('Wrong length of sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.aSide + this.bSide + this.cSide) / 2;

    return round(Math.sqrt(halfPerimeter
    * (halfPerimeter - this.aSide)
    * (halfPerimeter - this.bSide)
    * (halfPerimeter - this.cSide)));
  }
}

export class Circle implements Figure {
  shape = Shape.CircleShape;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('fail radius');
    }
  }

  getArea(): number {
    return round((Math.PI * this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.RectangleShape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('fail sides');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
