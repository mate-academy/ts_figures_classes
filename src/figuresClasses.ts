export interface Figure {
  shape: string;
  color: string;
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
    const sorted: number[] = [a, b, c].sort((x: number, y: number) => y - x);

    if (a <= 0 || b <= 0 || c <= 0 || sorted[0] >= sorted[1] + sorted[2]) {
      throw new Error('The sides do not satisfy the triangle inequality');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return parseFloat(square.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number');
    }
  }

  getArea(): number {
    const square: number = this.radius * this.radius * Math.PI;

    return +square.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be a positive number');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
