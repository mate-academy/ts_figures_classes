type Colors = 'red' | 'green' | 'blue';
type Form = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Form;
  color: Colors;
  getArea(): number,
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('the length of the triangle sides must be > 0');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error(
        'the length of the triangle side must be less'
          + 'than the sum of the other two sides',
      );
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = ((perimeter
      * (perimeter - this.a) * (perimeter - this.b)
      * (perimeter - this.c)) ** 0.5);

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('the length of the radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('the length of the sides must be > 0');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
