type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c || a <= Math.abs(b - c)) {
      throw new Error('Given sides of the triangle can\'t form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'One or more sides of the triangle are less or equal zero',
      );
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area = Math.floor(
      Math.sqrt(semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c))
      * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of the circle is less or equal zero');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * (this.radius ** 2)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'One or both sides of the rectangle are les or equal zero',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const info = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return info;
}
