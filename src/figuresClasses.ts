export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    protected color: string,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (max >= sum - max) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}
export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    protected color: string,
    protected radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    protected color: string,
    protected width: number,
    protected height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
