// import { error } from 'console';

export interface Figure {
  readonly shape: 'triangle' | 'circle' | 'rectangle';
  readonly color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    readonly shape: 'triangle',
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'All sides of a triangle must have positive lengths. ' +
          'Side lengths must be greater than 0.',
      );
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        'A triangle with these sides is not valid. ' +
          'The sum of any two sides must be greater than the third side.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    readonly shape: 'circle',
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(
        'The radius of a circle must be a positive number greater than 0.',
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    readonly shape: 'rectangle',
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'Width and height of a rectangle must be' +
          ' positive numbers greater than 0.',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaString = area % 1 === 0 ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaString}`;
}
