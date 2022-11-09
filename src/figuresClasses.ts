type Color = 'red' | 'green' | 'blue';

function roundDownToHundredths(length: number): number {
  return Math.floor(length * 100) / 100;
}

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure{
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('enter positive values for lenghts');
    }

    const max = Math.max(this.a, this.b, this.c);

    if (max >= this.a + this.b + this.c - max) {
      throw new Error('the longest side can not be more than sum of 2 else');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;
    const squareTriangle = Math.sqrt(p * (p - this.a)
* (p - this.b) * (p - this.c));

    return roundDownToHundredths(squareTriangle);
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('enter positive values for lenghts');
    }
  }

  getArea():number {
    const squareCircle = Math.PI * this.radius ** 2;

    return roundDownToHundredths(squareCircle);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('enter positive values for lenghts');
    }
  }

  getArea():number {
    const squareRectangle = this.width * this.height;

    return roundDownToHundredths(squareRectangle);
  }
}

export function getInfo(figure: Figure):string {
  const str: string = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return str;
}
