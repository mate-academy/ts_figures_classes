
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    this.shape = Shape.Triangle;

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b) {
      throw new Error("It isn't a triangle. You can't build a figure");
    }
  }

  getArea():number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const area: number = +Math.sqrt(semiP
      * (semiP - this.a) * (semiP - this.b) * (semiP - this.c)).toFixed(2);

    return area;
  }
}

export class Circle implements Figure {
  shape:Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error("You can't build a figure");
    }
  }

  getArea():number {
    const area: number = +(3.14 * (this.radius ** 2)).toFixed(2);

    return area;
  }
}

export class Rectangle implements Figure {
  shape:Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error("You can't build a figure");
    }
  }

  getArea():number {
    const area:number = +(this.width * this.height).toFixed(2);

    return area;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
