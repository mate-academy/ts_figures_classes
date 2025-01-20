type Figures = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Figures;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figures = 'triangle';

  constructor(
    public color: Colors,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const checkNormalSize = [a, b, c].sort((n1: number, n2: number) => n1 - n2);

    if (checkNormalSize[2] >= checkNormalSize[0] + checkNormalSize[1]) {
      throw new Error('Invalid triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side should be > 0');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figures = 'circle';

  constructor(
    public color: Colors,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius should be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figures = 'rectangle';

  constructor(
    public color: Colors,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions should be > 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
