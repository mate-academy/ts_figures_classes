export function zeroChecker(...args: number[]): boolean {
  return args.every((number) => number >= 0);
}

export enum FigureShapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: FigureShapes,
  color: string,
  getArea: Function,
}

export class Triangle implements Figure {
  shape = FigureShapes.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!zeroChecker(a, b, c)) {
      throw new Error('Triangle sides should be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Cannot form a triangle. One side is too long bro/sis');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = FigureShapes.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (!zeroChecker(radius)) {
      throw new Error('Come on, radius should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureShapes.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (!zeroChecker(width, height)) {
      throw new Error('Rectangle side should be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
