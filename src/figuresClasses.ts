type Colors = 'red' | 'green' | 'blue';
type Shapes = `triangle` | `circle` | `rectangle`;

export interface Figure {
  readonly shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  readonly shape: Shapes = `triangle`;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
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

    const area = (a + b + c) / 2;

    return +Math.sqrt(area * (area - a) * (area - b) * (area - c)).toFixed(2);
  };
}

export class Circle implements Figure {
  readonly shape: Shapes = `circle`;

  constructor(
    public color: Colors,
    public radius: number,
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
  readonly shape: Shapes = `rectangle`;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
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
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
