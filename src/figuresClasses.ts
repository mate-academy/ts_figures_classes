type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea: Function;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: string,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    const sumOfTwoSides = (a + b + c) - maxSide;

    if (sumOfTwoSides - maxSide <= 0) {
      throw new Error(
        `sides ${a}, ${b} and ${c} can't form a ${this.shape}`,
      );
    }

    if (Math.min(a, b, c) <= 0) {
      throw new Error('Cant form circle with side <= 0');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public color: string,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Cant form circle with radius <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public color: string,
    protected width: number,
    protected height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error('Cant form rectangle with sides <= 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
