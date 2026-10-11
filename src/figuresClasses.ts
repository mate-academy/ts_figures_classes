export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longest = Math.max(a, b, c);

    const sumOfOthers = a + b + c - longest;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Every value needs to have at least 1!');
    }

    if (longest >= sumOfOthers) {
      throw new Error(`Impossible triangle to create!
      Sum of two sides needs to be less than longest one!`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Value of radius needs to be above 0!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
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
      throw new Error('Every value needs to have at least 1!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
