type FigureShape = 'triangle' | 'circle' | 'rectangle';
type ColorShape = 'red' | 'green' | 'blue';

export interface Figure {
  color: ColorShape;
  shape: FigureShape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: ColorShape,
    public a: number,
    public b: number,
    public c: number,
    public shape: FigureShape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side less than zero');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('invalid data');
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(
      halfPerimetr *
        (halfPerimetr - this.a) *
        (halfPerimetr - this.b) *
        (halfPerimetr - this.c),
    );

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorShape,
    public radius: number,
    public shape: FigureShape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius less than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorShape,
    public width: number,
    public height: number,
    public shape: FigureShape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side less than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
