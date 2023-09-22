type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  readonly shape: Shape;
  color: Color;
  getArea(): number;
  checkProperties(): void;
}

export class Triangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkProperties();
    this.shape = 'triangle';
  }

  checkProperties(): void {
    if ([this.a, this.b, this.c].some((side) => side <= 0)
      || !this.checkSidesLength()) {
      throw new Error('Not a triangle');
    }
  }

  private checkSidesLength(): boolean {
    const [first, second, third] = [this.a, this.b, this.c]
      .sort((a, b) => b - a);

    if (first >= second + third) {
      return false;
    }

    return true;
  }

  private getSemiPerimeter(): number {
    return (this.a + this.b + this.c) / 2;
  }

  getArea(): number {
    const p: number = this.getSemiPerimeter();

    return Number((100 * Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c)) / 100)
      .toFixed(2));
  }
}

export class Circle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkProperties();
    this.shape = 'circle';
  }

  checkProperties(): void {
    if (this.radius <= 0) {
      throw new Error('Not a circle');
    }
  }

  getArea():number {
    return Number((Math.floor(100 * (Math.PI * (this.radius ** 2))) / 100)
      .toFixed(2));
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.checkProperties();
    this.shape = 'rectangle';
  }

  checkProperties(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
