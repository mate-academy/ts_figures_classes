type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'blue' | 'green';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea: () => number;
}

const roundedToHundredths = (s: number): number => {
  return Math.floor(s * 100) / 100;
};

export class Triangle implements Figure {
  public shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c - max;

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum) {
      throw new Error('Impossible Triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const P: number = (a + b + c) / 2;
    const S: number = Math.sqrt(P * (P - a) * (P - b) * (P - c));

    return roundedToHundredths(S);
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw Error('Impossible Circle');
    }
  }

  getArea(): number {
    const { radius } = this;

    const S = Math.PI * Math.pow(radius, 2);

    return roundedToHundredths(S);
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('Impossible Rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const S = width * height;

    return roundedToHundredths(S);
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;

  const result = figure.getArea();

  return `A ${color} ${shape} - ${result}`;
}
