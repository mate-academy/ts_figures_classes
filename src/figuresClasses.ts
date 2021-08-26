export type Color = 'red' | 'green' | 'blue';
export type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape: Shape;

  a: number;

  b: number;

  c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

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

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
}

export class Circle implements Figure {
  shape: Shape;

  radius: number;

  constructor(
    public color: Color,
    r: number,
  ) {
    this.shape = 'circle';
    this.radius = r;

    if (this.radius <= 0) {
      throw new Error('The radius should be positive integer');
    }
  }

  public getArea(): number {
    return (this.radius * this.radius * 3.14);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  height: number;

  width: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    this.shape = 'rectangle';
    this.height = a;
    this.width = b;

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

  return `A ${object.color} ${object.shape} - ${Math.round(object.getArea()
    * 100) / 100}`;
}
