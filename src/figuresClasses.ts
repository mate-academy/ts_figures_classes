type FigureColor = 'red' | 'green' | 'blue';
type FigureShape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be larger then zero!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Side size isn`t valid');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      s * (s - this.a)
      * (s - this.b)
      * (s - this.c),
    ).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side must be larger then zero!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be larger then zero!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
