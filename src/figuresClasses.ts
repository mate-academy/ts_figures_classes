type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  readonly shape: Shape;
  color: Color;
  getArea: () => number;
}
type NumberValue = number;

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: NumberValue = 0,
    public b: NumberValue = 0,
    public c: NumberValue = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle dimensions');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle dimensions');
    }
  }

  getArea = (): number => {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;

    return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
  };
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: NumberValue = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea = (): number => {
    const { radius } = this;

    const area = Math.PI * radius * radius;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: NumberValue = 0,
    public height: NumberValue = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea = (): number => {
    const { width, height } = this;

    return +(width * height).toFixed(2);
  };
}

export function getInfo(figure: Figure): string {
  const { shape, color, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
