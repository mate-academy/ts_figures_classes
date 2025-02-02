type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Side ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const sqrt = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(sqrt * (sqrt - this.a) * (sqrt - this.b) * (sqrt - this.c)) *
          100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must begreater than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
