// import { thisTypeAnnotation } from "@babel/types";

type Shape = 'triangle'|'circle'|'rectangle';
type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error(
        'you can not create triangle if side less or equal sum of other two',
      );
    }
  }

  getArea(): number {
    const semiperimeter = 1 / 2 * (this.a + this.b + this.c);
    const triangleArea = (Math.sqrt(
      semiperimeter * (semiperimeter - this.a) * (
        semiperimeter - this.b) * (semiperimeter - this.c),
    ));

    return Number(triangleArea.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(
        'You can not create circle with radius that less or equal 0',
      );
    }
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width:number,
    public height:number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0
      || this.height <= 0) {
      throw new Error(
        'you can not create rectangle with sides that are less or equal 0',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
