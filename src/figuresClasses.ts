type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isValidSides = this.a > 0 && this.b > 0 && this.c > 0;

    if (!isValidSides) {
      throw new Error('sides cannot be negtive');
    }

    const isSideBiggerThanTwoOthers = (this.a >= (this.b + this.c))
      || (this.b >= (this.a + this.c))
      || (this.c >= (this.a + this.b));

    if (isSideBiggerThanTwoOthers) {
      throw new Error('side cannot be larger than two other sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    const isValidRadius = this.radius > 0;

    if (!isValidRadius) {
      throw new Error('side cannot be negtive');
    }
  }

  getArea(): number {
    const result = Math.PI * (this.radius ** 2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    const isValidSides = this.width > 0 && this.height > 0;

    if (!isValidSides) {
      throw new Error('side cannot be negtive');
    }
  }

  getArea(): number {
    const result = this.width * this.height;

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
