type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  checkFigureProperties(): void;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkFigureProperties();
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return Math.round(area * 100) / 100;
  }

  checkFigureProperties(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle sides should be > 0!');
    }

    const sides: number[] = [this.a, this.b, this.c].sort((prev, next) => (
      next - prev
    ));

    const longestSide: number = sides[0];
    const sumOfShortSides: number = sides[1] + sides[2];

    if (longestSide >= sumOfShortSides) {
      throw new Error('The longest side can`t be >= than a sum of two others!');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkFigureProperties();
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }

  checkFigureProperties(): void {
    if (this.radius <= 0) {
      throw new Error('Circle radius should be > 0!');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.checkFigureProperties();
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }

  checkFigureProperties(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sizes should be > 0!');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
