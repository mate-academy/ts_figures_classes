type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  area: number,
}

export class Triangle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.area = this.getArea();

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Incorrect value');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.area = this.getArea();

    if (this.radius < 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = Math.PI * (radius * radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.area = this.getArea();

    if (this.width < 0 || this.height < 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo({ color, shape, area }: Figure): string {
  return `A ${color} ${shape} - ${area}`;
}
