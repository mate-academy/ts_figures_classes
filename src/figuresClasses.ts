export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides.some((x) => x <= 0)) {
      throw new Error('Sides length must be greater than 0');
    }

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        'The longest side must be smaller than the sum of the other sides',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return +Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
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
      throw new Error('Sides length must be greater than 0');
    }
  }

  getArea(): number {
    return +Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
