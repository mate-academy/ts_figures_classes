export interface Figure {
  shape: string,
  color: string,
  getArea(): number
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides of triangle cannot be less than 1');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(
        'The sum of 2 sides can`t be less or equal to the third side',
      );
    }
  }

  getArea(): number {
    const semiperimiter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimiter * (semiperimiter - this.b)
    * (semiperimiter - this.a) * (semiperimiter - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be less or equal to 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width or height cannot be less or equal to 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
