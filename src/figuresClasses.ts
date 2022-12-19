type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
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
    if (!this.isValidTriangle()) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  private isValidTriangle: () => boolean = () => {
    const conditions = [
      this.a !== 0,
      this.b !== 0,
      this.c !== 0,
      this.a + this.b > this.c,
      this.b + this.c > this.a,
      this.c + this.a > this.b,
    ];

    return conditions.every(Boolean);
  };

  getArea(): number {
    const halfPerimeter = 0.5 * (this.a + this.b + this.c);

    return Math.floor(
      100
        * Math.sqrt(halfPerimeter
        * (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)),
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!this.isValidCircle()) {
      throw new Error(`Radius ${radius} can't form the circle`);
    }
  }

  private isValidCircle: () => boolean = () => {
    return this.radius > 0;
  };

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (!this.isValidRectangle()) {
      throw new Error(`Sides ${this.a} and ${this.b} can't form the rectangle`);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(100 * area) / 100;
  }

  private isValidRectangle: () => boolean = () => {
    return this.a > 0 && this.b > 0;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
