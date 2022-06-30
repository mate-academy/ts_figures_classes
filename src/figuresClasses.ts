type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea():number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('a, b or c can not be less than 1');
    }

    const size:number = Math.max(a, b, c);
    const sumOfSides:number = (a + b + c) - size;

    if (size >= sumOfSides) {
      throw new Error('This is not a triangle');
    }
  }

  getArea():number {
    const hafPerimeter = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(hafPerimeter * (hafPerimeter - this.a)
      * (hafPerimeter - this.b) * (hafPerimeter - this.c))).toFixed(2));
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be less than 1');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Incorrect value for a or b');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
