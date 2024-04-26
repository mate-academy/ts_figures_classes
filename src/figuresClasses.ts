export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [this.a, this.b, this.c].sort((x, y) => y - x);

    if (
      sides[0] >= sides[1] + sides[2] ||
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0
    ) {
      throw new Error(
        'Longest side of triangle cant be less than sum of others',
      );
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be higher than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any side of Rectangle cant be less than 0');
    }
  }

  getArea(): number {
    const area = (this.width * this.height * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
