export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number,
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('check the length of the sides');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error('check the length of the sides');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const area: number
     = ((perimeter * (perimeter - this.a)
     * (perimeter - this.b) * (perimeter - this.c))
     ** 0.5);

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('check the length of the radius');
    }
  }

  getArea(): number {
    const area = 3.141592 * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('check the length of the sides');
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
