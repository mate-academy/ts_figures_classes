
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  private sideA: number;

  private sideB: number;

  private sideC: number;

  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides {${a}, ${b} and ${c} can't form a triangle}`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides cannot be zero');
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  getArea(): number {
    const halfPerimeter: number = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.sideA)
      * (halfPerimeter - this.sideB)
      * (halfPerimeter - this.sideC),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  private radius: number;

  constructor(
    public color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be zero or less');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  private sideA: number;

  private sideB: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('sides cannot be zero or less');
    }

    this.sideA = a;
    this.sideB = b;
  }

  getArea(): number {
    return this.sideA * this.sideB;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
