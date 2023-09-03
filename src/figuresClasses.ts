export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error, side length can`t be <= 0');
    }

    const theBiggestSide = Math.max(a, b, c);

    if (theBiggestSide >= a + b + c - theBiggestSide) {
      throw new Error('Error,the longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const areaByHeronsFormula = Math.sqrt(semiPerimeter * (
      ((semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c))
    ));

    return Math.trunc(areaByHeronsFormula * 100) / 100;
  }
}

export class Circle {
  public shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Error, radius length can`t be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error, side length can`t be <= 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
