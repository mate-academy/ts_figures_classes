type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }

    if (Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c)) {
      throw new Error(
        `throws an error: sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiperimeter * (
      semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
    const aroundArea = (Math.floor(area * 100)) / 100;

    return aroundArea;
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }
  }

  getArea(): number {
    const { a } = this;
    const area = (a * a * Math.PI);
    const aroundArea = (Math.floor(area * 100)) / 100;

    return aroundArea;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }
  }

  getArea(): number {
    const { a, b } = this;

    return a * b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
