type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.checkLengths();
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c),
    );

    return +area.toFixed(2);
  }

  checkLengths(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle: sides must be longer than 0.');
    }

    const longestSide: number = Math.max(this.a, this.b, this.c);
    const shorterSides: number[] = [this.a, this.b, this.c]
      .filter((side: number): boolean => side !== longestSide);

    if (longestSide >= shorterSides[0] + shorterSides[1]) {
      throw new Error(
        'Triangle: the longest side must be shorter than a sum of the others.',
      );
    }
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    this.checkRadius();
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }

  checkRadius(): void {
    if (this.radius <= 0) {
      throw new Error('Circle: radius must be longer than 0.');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    this.checkLengths();
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }

  checkLengths(): void {
    if (this.width <= 0) {
      throw new Error('Rectangle: width must be longer than 0.');
    }

    if (this.height <= 0) {
      throw new Error('Rectangle: height must be longer than 0.');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
