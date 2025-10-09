type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public readonly color: Color,
    private readonly sideA: number,
    private readonly sideB: number,
    private readonly sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All triangle sides must be greater than 0');
    }

    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error(
        'Sum of any two sides must be greater than the third side',
      );
    }
  }

  public readonly shape: 'triangle' = 'triangle';

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}
export class Circle implements Figure {
  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Invalid circle radius: ${radius}. Radius must be a positive number`,
      );
    }
  }

  public readonly shape: 'circle' = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0) {
      throw new Error('Rectangle width must be greater than 0');
    }

    if (height <= 0) {
      throw new Error('Rectangle height must be greater than 0');
    }
  }

  public readonly shape: 'rectangle' = 'rectangle';

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(fig: Figure): string {
  return `A ${fig.color} ${fig.shape} - ${fig.getArea()}`;
}
