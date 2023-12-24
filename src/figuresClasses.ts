export type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length cannot be less than or equal to 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      const one: string = 'The longest side cannot be greater ';
      const two: string = 'than orequal to the sum of two other sides';

      throw new Error(`${one} + ${two}`);
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s
      * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less than or equal to 0');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height cannot be less than or equal to 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
