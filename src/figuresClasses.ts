export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('A or b or c cannot be less than zero!');
    }

    if (
      this.a + this.b <= this.c ||
      this.b + this.c <= this.a ||
      this.a + this.c <= this.b
    ) {
      throw new Error('Such a triangle does not exist!');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +(Math.floor(s * 100) / 100).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be less than zero!');
    }
  }

  getArea(): number {
    const s: number = Math.PI * this.radius ** 2;

    return +(Math.floor(s * 100) / 100).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Height or width cannot be less then zero!');
    }
  }

  getArea(): number {
    const s: number = this.width * this.height;

    return +(Math.floor(s * 100) / 100).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const s: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${s}`;
}
