type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  private isValidTriangle(): boolean {
    const triangleConditions = [
      this.a <= 0,
      this.b <= 0,
      this.c <= 0,
      this.a + this.b <= this.c,
      this.a + this.c <= this.b,
      this.b + this.c <= this.a,
    ];

    return !triangleConditions.some(Boolean);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!(this.isValidTriangle())) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const halfPerim: number = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(
      halfPerim
      * (halfPerim - this.a)
      * (halfPerim - this.b)
      * (halfPerim - this.c),
    ).toFixed(2)
    ));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Impossible to create circle with this radius');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  private isValideRectangle(): boolean {
    return (this.width >= 0 && this.height >= 0);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return area;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!(this.isValideRectangle())) {
      throw new Error('Can not use negative value for size');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
