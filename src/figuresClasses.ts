type FigureParametrType = string;

export interface Figure {
  shape: FigureParametrType;
  color: FigureParametrType;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesSizes: number[] = [a, b, c]
      .sort((aSide: number, bSide: number) => bSide - aSide);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong sides values');
    }

    if (sidesSizes[0] >= (sidesSizes[1] + sidesSizes[2])) {
      throw new Error('Wrong sides values');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong width or height');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
