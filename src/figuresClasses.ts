export interface Figure {
  shape: string,
  color: string,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || c <= 0 || b <= 0) {
      throw new Error('wrong side(s)');
    }

    const checkLongest = [this.a, this.b, this.c]
      .sort((side1, side2) => side2 - side1);

    if (checkLongest[0] >= checkLongest[1] + checkLongest[2]) {
      throw new Error('unappropriated side');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c));

    return Number(result.toFixed(2));
  }
}

export class Circle {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong radius');
    }
  }

  getArea(): number {
    const result = Math.PI * (this.radius * this.radius);

    return Math.floor(result * 100) / 100;
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
      throw new Error('wrong side');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
