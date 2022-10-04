type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  checkInitialData(): void;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be > than zero!');
    }

    const sides: number[] = [this.a, this.b, this.c]
      .sort((n: number, m: number) => m - n);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        'The longes side should be < then the sum of two others!',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.radius <= 0) {
      throw new Error('Radius should be > than zero!');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Both sides should be > than zero!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
