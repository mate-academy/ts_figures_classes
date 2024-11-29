type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side 'a' must be greater than 0, but got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Side 'b' must be greater than 0, but got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Side 'c' must be greater than 0, but got ${c}`);
    }

    if (!this.isValidTriangle()) {
      throw new Error("This triangle can't exist.");
    }
  }

  private isValidTriangle(): boolean {
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a
    );
  }

  public getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0, but got ${radius}`);
    }
  }

  public getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(`Width must be greater than 0, but got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Height must be greater than 0, but got ${height}`);
    }
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
