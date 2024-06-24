type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

function checkError(condition: boolean, message: string): void {
  if (condition) {
    throw new Error(message);
  }
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Colors,
    private a: number,
    private b: number,
    private c: number,
  ) {
    checkError(
      a <= 0 || b <= 0 || c <= 0,
      'One or more sides are less than or equal to zero',
    );

    checkError(
      a + b <= c || a + c <= b || b + c <= a,
      "Your sides can't form a triangle",
    );
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Colors,
    private radius: number,
  ) {
    checkError(radius <= 0, 'Radius must be greater than zero');
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Colors,
    private width: number,
    private height: number,
  ) {
    checkError(
      width <= 0 || height <= 0,
      'Width or height is less than or equal to zero',
    );
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
