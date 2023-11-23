export interface Figure {
  shape: string,
  color: string;
  getArea(): object;
}

export class Triangle {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const sides = [a, b, c];
    const sS = sides.sort((i, j) => j - i);

    if (a <= 0 || b <= 0 || c <= 0 || sS[0] >= sS[1] + sS[2]) {
      const error = new Error("sides 1, 2 and 3 can't form a triangle");

      throw error;
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +s.toFixed(2);
  }
}

export class Circle {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;

    return +s.toFixed(2);
  }
}

export class Rectangle {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return +s.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
