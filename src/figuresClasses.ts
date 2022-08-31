export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Color = 'red' | 'grin' | 'blur';

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || c + a <= b || b + c <= a) {
      throw new Error('the longest side of a triangle is'
      + '>= than a sum of two others');
    }
  }

  shape: string = 'triangle';

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('property id zero');
    }
  }

  shape: string = 'circle';

  getArea(): number {
    return Math.floor((this.radius * this.radius * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public hight: number,
  ) {
    if (width < 0 || hight < 0) {
      throw new Error('property id zero');
    }
  }

  shape: string = 'rectangle';

  getArea(): number {
    return (this.hight * this.width);
  }
}

export function getInfo(figure: Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
