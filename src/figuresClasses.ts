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
    const isUnValidSides = this.a < 0 || this.b < 0 || this.c < 0;

    if (isUnValidSides) {
      throw new Error('side cannot be negtive');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const multipleOfS = s * (s - this.a) * (s - this.b) * (s - this.c);

    return Math.sqrt(multipleOfS);
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    const isUnValidRadius = this.radius < 0;

    if (isUnValidRadius) {
      throw new Error('side cannot be negtive');
    }
  }

  getArea(): number {
    return Math.PI * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    const isUnValidSides = this.width < 0 || this.height < 0;

    if (isUnValidSides) {
      throw new Error('side cannot be negtive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
