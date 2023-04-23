function checkError(...sides: number[]): void {
  const isError = [...sides].some((el) => el <= 0);
  const sidesSum = [...sides].reduce((a, i) => a + i, 0);
  const maxSide = Math.max(...sides);
  const isTriangle = sides.length === 3
    ? (maxSide >= (sidesSum - maxSide)) : false;

  if (isError || isTriangle) {
    throw new Error('error message');
  }
}

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
    checkError(this.a, this.b, this.c);
    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a)
     * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    checkError(this.radius);
    this.shape = 'circle';
  }

  getArea(): number {
    return +(Math.floor(Math.PI * this.radius * this.radius * 100)
    / 100).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    checkError(this.width, this.height);
    this.shape = 'rectangle';
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
