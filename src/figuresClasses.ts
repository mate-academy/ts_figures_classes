// import { Bundle } from "typescript";

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side length can\'t be less than 0');
    }

    if (this.a >= this.b + c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error(
        'the sum of any 2 sides must be greater than'
        + 'the measure of the third side',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be less than 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('width can\'t be less than 0');
    }

    if (height <= 0) {
      throw new Error('height can\'t be less than 0');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
