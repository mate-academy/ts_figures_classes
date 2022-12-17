
function round(n: number): number {
  return Math.floor(n * 100) / 100;
}

type Shape = 'rectangle' | 'circle' | 'triangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validateFigure();
  }

  validateFigure(): void {
    const theSmallest: number = Math.min(this.a, this.b, this.c);
    const sortedSides: number[] = [this.a, this.b, this.c]
      .sort((side1, side2) => side1 - side2);

    if (theSmallest <= 0) {
      throw new Error('invalid length of some side');
    }

    if (sortedSides[2] >= (sortedSides[0] + sortedSides[1])) {
      throw new Error(
        'the longest side of a triangle must be >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;

    return round(
      Math.sqrt(
        semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.validateFigure();
  }

  validateFigure(): void {
    if (this.radius <= 0) {
      throw new Error('radius can\'t be 0');
    }
  }

  getArea(): number {
    return round(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.validateFigure();
  }

  validateFigure(): void {
    const theSmallest: number = Math.min(this.width, this.height);

    if (theSmallest <= 0) {
      throw new Error('invalid length of some side');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
