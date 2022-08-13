type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea():number;
}

export class Triangle implements Figure {
  public color: Color;

  public shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color:Color, a:number, b:number, c:number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides of this triangle must
       have length grather than 0!`);
    }

    const bigSide = Math.max(a, b, c);
    const perimetr = a + b + c;

    if (bigSide >= perimetr - bigSide) {
      throw new Error(`Recieved sides is incorrect!
       Check lengthes of sides please!`);
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  public shape: Shape = 'circle';

  radius: number;

  constructor(color:Color, radius:number) {
    if (radius <= 0) {
      throw new Error(`Radius must
       have length grather than 0!`);
    }

    this.radius = radius;
    this.color = color;
  }

  getArea():number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  public shape: Shape = 'rectangle';

  width: number;

  height: number;

  constructor(color:Color, width:number, height:number) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Sides of this rectangle must
       have length grather than 0!`);
    }

    this.height = height;
    this.width = width;
    this.color = color;
  }

  getArea():number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
