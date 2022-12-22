export type Shape = 'triangle'|'circle'|'rectangle';
export type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color = 'red';

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a:number, b:number, c:number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('ERROR, side length can not be 0 or negative');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('ERROR, it is not triangle');
    }
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return Math.round(areaOfTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color = 'green';

  radius: number;

  constructor(color: Color, radius:number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('ERROR, radius can not be 0 or negative');
    }
  }

  getArea():number {
    const squareOfCircle = Math.PI * this.radius ** 2;

    return Math.floor(squareOfCircle * 100) / 100;
  }
}
export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color = 'blue';

  width: number;

  height: number;

  constructor(color: Color, width:number, height:number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('ERROR, side length can not be 0 or negative');
    }
  }

  getArea():number {
    const areaOfRectangle = this.width * this.height;

    return Math.round(areaOfRectangle * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
