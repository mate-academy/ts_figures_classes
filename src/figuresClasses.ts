export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length must be a positive number');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfOthers = a + b + c - maxSide;

    if (maxSide >= sumOfOthers) {
      throw new Error('Invalid triangle sides');
    }
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public getArea(): number {
    const area = Math.PI * this.r ** 2;

    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public getArea(): number {
    const area = this.a * this.b;

    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Side length must positive number');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
