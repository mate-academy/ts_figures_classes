export interface Figure {
  shape: string,
  color: string,

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide: number = Math.max(this.a, this.b, this.c);
    const sum: number = [this.a, this.b, this.c]
      .sort((x: number, y: number) => x - y)
      .slice(0, 2)
      .reduce((prev: number, curr: number): number => prev + curr);

    if (
      this.a <= 0 || this.b <= 0 || this.c <= 0 || longestSide >= sum
    ) {
      throw new Error('Please check:'
      + 'Value can\'t be less than 0'
      + 'longest side has to be less than a sum of two others');
    }
  }

  getArea(): number {
    const s: number = Math.floor((this.a + this.b + this.c) * 100 / 2) / 100;

    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Value can\'t be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Value can\'t be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
