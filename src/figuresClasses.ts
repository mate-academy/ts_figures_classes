type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.c <= 0 || this.a <= 0 || this.b <= 0) {
      throw new Error(
        'the side of the triangle must be bigger than zero',
      );
    }

    if (this.c >= this.a + this.b
      || this.a >= this.c + this.b
      || this.b >= this.a + this.c
    ) {
      throw new Error(
        'the side of a triangle is bigger than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius could more than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public heigth: number,
    public width: number,
  ) {
    this.color = color;
    this.heigth = heigth;
    this.width = width;
    this.shape = 'rectangle';

    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('width and heigth must be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.heigth * this.width);
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
