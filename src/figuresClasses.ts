type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape : Shape
  color : Color;
  getArea() : number;
}

function getRounding(square : number): number {
  return Math.trunc(square * 100) / 100;
}

export class Triangle implements Figure {
  shape : Shape;

  constructor(
    public color : Color,
    private b : number,
    private a : number,
    private c : number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        `Throws an error: sides ${a}, ${b} and ${c} cannot form a triangle`,
      );
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b) {
      throw new Error(
        `Throws an error: sides ${a}, ${b} and ${c} cannot form a triangle`,
      );
    }
  }

  getArea(): number {
    const perimetr : number = ((this.a + this.b + this.c) / 2);

    return getRounding(Math.sqrt(perimetr
      * (perimetr - this.a)
      * (perimetr - this.b)
      * (perimetr - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color : Color, private radius : number) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(`Throws an error: radius ${radius} cannot form circle`);
    }
  }

  getArea(): number {
    return getRounding(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape : Shape;

  constructor(
    public color : Color,
    private width : number,
    private height : number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(
        `Throws an error: sides ${width} and ${height} cannot form a rectangle`,
      );
    }
  }

  getArea(): number {
    return getRounding(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
