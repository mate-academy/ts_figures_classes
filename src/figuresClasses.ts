type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    if (!this.isValidTriangle()) {
      throw new Error('insert correct data');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          halfPerimeter *
            (halfPerimeter - this.a) *
            (halfPerimeter - this.b) *
            (halfPerimeter - this.c),
        ) * 100,
      ) / 100
    );
  }

  private isValidTriangle(): boolean {
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a &&
      this.a > 0 &&
      this.b > 0 &&
      this.c > 0
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: 'circle' = 'circle',
  ) {
    if (!this.isVAlidCircle()) {
      throw new Error('insert correct data');
    }
  }

  getArea(): number {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  }

  private isVAlidCircle(): boolean {
    return this.radius > 0;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (!this.isValidReactangle()) {
      throw new Error('insert correct data');
    }
  }

  getArea(): number {
    return parseFloat((this.a * this.b).toFixed(2));
  }

  private isValidReactangle(): boolean {
    return this.a > 0 && this.b > 0;
  }
}

export function getInfo(figure: Circle | Triangle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
