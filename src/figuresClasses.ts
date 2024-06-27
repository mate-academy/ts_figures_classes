type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkError(errorMessage: string, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkError('Not a triangl');

    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error(`${a}, ${b}, ${c} cant form a triangle`);
    }
  }

  getArea(): number {
    const samiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      samiPerimeter *
        (samiPerimeter - this.a) *
        (samiPerimeter - this.b) *
        (samiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private redius: number,
  ) {
    checkError('Circle radius must be > 0', redius);
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.redius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkError('Width and height must be > 0', width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
