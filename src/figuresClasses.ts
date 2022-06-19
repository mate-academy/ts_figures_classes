export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export enum FigureTypes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
}

export function roundResult(num: number): number {
  const numTo2Decimals = Number(num.toFixed(3).slice(0, -1));

  return +numTo2Decimals.toFixed(2);
}

export class Triangle implements Figure {
  public shape: Shape = FigureTypes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error("One or a few triangle sides don't exist.");
    }

    const sidesList: number[] = [this.a, this.b, this.c]
      .sort((prev: number, next: number) => next - prev);

    if (sidesList[0] >= sidesList[1] + sidesList[2]) {
      throw new Error(
        'The biggest side is bigger than the sum of two another.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return roundResult(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = FigureTypes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Radius less than 0.');
    }

    if (!this.radius || this.radius <= 0) {
      throw new Error('Square radius doesn\'t exist');
    }
  }

  getArea(): number {
    return roundResult(Math.PI * (this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = FigureTypes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('One of sides doesn\'t exist');
    }
  }

  getArea(): number | Error {
    return roundResult(this.width * this.height);
  }
}

export type Figures = Triangle | Circle | Rectangle;

export function getInfo(figure: Figures): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
