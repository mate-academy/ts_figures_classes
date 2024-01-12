export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([this.a, this.b, this.c].every((side) => side <= 0)) {
      throw new Error('Resulting value should be bigger than 0');
    }

    if (this.a + this.b <= this.c) {
      throw new Error('Hypotenuse should be bigger than sum of two sides');
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Resulting value should be bigger than 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

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
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Resulting value should be bigger than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
