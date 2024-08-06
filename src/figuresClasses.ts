enum Colors {
  blue = 'blue',
  green = 'green',
  red = 'red',
}

enum Shapes {
  triangle = `triangle`,
  circle = `circle`,
  rectangle = `rectangle`,
}

function checkOnError(condition: boolean, errorMessage: string): void {
  if (condition) {
    throw new Error(errorMessage);
  }
}

export interface Figure {
  readonly shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  readonly shape: Shapes = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkOnError(a <= 0 || b <= 0 || c <= 0, 'Invalid triangle dimensions');

    checkOnError(
      a + b <= c || a + c <= b || b + c <= a,
      'Invalid triangle dimensions',
    );
  }

  getArea = (): number => {
    const { a, b, c } = this;

    const area = (a + b + c) / 2;

    return Number(
      Math.sqrt(area * (area - a) * (area - b) * (area - c)).toFixed(2),
    );
  };
}

export class Circle implements Figure {
  readonly shape: Shapes = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    checkOnError(radius <= 0, 'Radius must be greater than 0');
  }

  getArea = (): number => {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  readonly shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    checkOnError(
      width <= 0 || height <= 0,
      'Width and height must be greater than 0',
    );
  }

  getArea = (): number => {
    const { width, height } = this;

    return Number((width * height).toFixed(2));
  };
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
