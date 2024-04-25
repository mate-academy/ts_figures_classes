export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`All sides values needs be greater than zero.`);
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error(
        `The longest side is greater than the sum of the other sides.`,
      );
    }

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius value need be greater than zero.`);
    }

    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error(
        `The width and heigth values needs be greater than zero.`,
      );
    }

    this.shape = `rectangle`;
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
