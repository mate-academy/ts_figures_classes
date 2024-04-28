type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: string;
  getArea: object;
}

export class Triangle implements Figure {
  shape: Shape;

  getArea: object;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('some of values for triangle is 0');
    }

    if (
      this.b + this.c <= this.a ||
      this.a + this.c <= this.b ||
      this.a + this.b <= this.c
    ) {
      throw new Error('Wrong values');
    }

    this.shape = 'triangle';

    this.getArea = (): number => {
      const s = 0.5 * (this.a + this.b + this.c);
      const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

      return Math.floor(area * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape: Shape;

  getArea: object;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
    this.shape = 'circle';

    this.getArea = (): number => {
      const area = Math.PI * this.radius ** 2;

      return Math.floor(area * 100) / 100;
    };
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  getArea: object;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }

    this.shape = 'rectangle';

    this.getArea = (): number => {
      const area = this.width * this.height;

      return Math.floor(area * 100) / 100;
    };
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
