type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  area: number;
}

export class Triangle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.area = this.getArea();

    if (this.checkSide() || this.checkLongestSide()) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const semiPerimeterA = semiPerimeter - this.a;
    const semiPerimeterB = semiPerimeter - this.b;
    const semiPerimeterC = semiPerimeter - this.c;

    const area = Math.sqrt(
      semiPerimeter * semiPerimeterA * semiPerimeterB * semiPerimeterC,
    );

    return Math.floor(area * 100) / 100;
  }

  checkSide(): boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return true;
    }

    return false;
  }

  checkLongestSide(): boolean {
    if (this.a >= this.b + this.c
    || this.b >= this.a + this.c
    || this.c >= this.b + this.a) {
      return true;
    }

    return false;
  }
}

export class Circle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.area = this.getArea();

    if (this.radius < 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.area = this.getArea();

    if (this.width < 0 || this.height < 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
