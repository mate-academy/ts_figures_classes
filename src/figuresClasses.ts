export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle sides');
    }
  }

  private isValidTriangle(): boolean {
    const maxSideA = this.b + this.c > this.a;
    const maxSideB = this.a + this.c > this.b;
    const maxSideC = this.a + this.b > this.c;

    return maxSideA && maxSideB && maxSideC;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaTriangle = Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +areaTriangle.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const areaCircle = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return areaCircle;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle side');
    }
  }

  getArea(): number {
    const areaRectangle = this.width * this.height;

    return areaRectangle;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
