export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    const arr = [a, b, c].sort((el1: number, el2: number) => el1 - el2);

    if (arr[2] >= arr[0] + arr[1]) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number = 0,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid circle');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number = 0,
    public height: number = 0,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid rectangle');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
