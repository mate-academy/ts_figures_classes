type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('Triangle side could not be less or equals 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('side of triangle couldnt be bigger than two others');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius of circle could not be less or equals 0');
    }
  }

  getArea(): number {
    const areaOfCircle: number = +Math.PI * (this.radius ** 2);

    return Math.floor(areaOfCircle * 100) / 100;

    // return +(Math.PI * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color, public width: number, public heigh: number) {
    if (width <= 0 || heigh <= 0) {
      throw new Error('side of rectangle could not be less or equals 0');
    }
  }

  getArea(): number {
    return this.width * this.heigh;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
