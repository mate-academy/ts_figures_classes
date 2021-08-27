export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be positive integers');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Those sides cannot form a triangle');
    }
  }

  public getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const { a } = this;
    const { b } = this;
    const { c } = this;

    const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return (Math.round(result * 100) / 100);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('The radius should be positive integer');
    }
  }

  public getArea(): number {
    return Math.round(this.radius * this.radius * 3.14 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    this.shape = 'rectangle';

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Both sides should be positive integers');
    }
  }

  public getArea():number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const object: Figure = figure;

  return `A ${object.color} ${object.shape} - ${object.getArea()}`;
}
