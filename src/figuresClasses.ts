export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      halfPerimetr
        * (halfPerimetr - this.a)
        * (halfPerimetr - this.b)
        * (halfPerimetr - this.c),
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  constructor(color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    return Math.trunc((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  constructor(color: string, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
