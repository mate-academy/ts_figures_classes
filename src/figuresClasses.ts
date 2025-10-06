type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

function floorToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public readonly color: Color,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        `Triangle sides must be positive. Received sides: ${this.a}, ${this.b}, ${this.c}`,
      );
    }

    if (this.isInvalidTriangle(this.a, this.b, this.c)) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle (longest side is too long).`,
      );
    }
  }

  private isInvalidTriangle(a: number, b: number, c: number): boolean {
    return a + b <= c || a + c <= b || b + c <= a;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaSquared = s * (s - this.a) * (s - this.b) * (s - this.c);
    const area = Math.sqrt(areaSquared);

    return floorToHundreds(area);
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        `Circle radius must be positive. Received radius: ${this.radius}`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return floorToHundreds(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        `Rectangle dimensions must be positive. Received width: ${this.width}, height: ${this.height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return floorToHundreds(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
