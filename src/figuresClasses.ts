type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

function validateEdges(...edges: number[]): void {
  if (edges.some((edge) => edge <= 0)) {
    throw new Error('Any length should be <= 0');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    validateEdges(a, b, c);
    this.validateTriangle();
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2);
  }

  private validateTriangle(): void {
    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('Any length should be <= 0');
    }
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    validateEdges(radius);
  }

  getArea(): number {
    return +(Math.PI * this.radius * this.radius).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    validateEdges(width, height);
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
