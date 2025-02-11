export interface Figure {
  color: string;
  a: number;
  b?: number;
  c?: number;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Value cant be 0');
    } else if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public shape: string = 'circle',
  ) {
    if (this.a <= 0) {
      throw new Error('Value cant be 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public shape: string = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Value cant be 0');
    }
  }

  getArea(): number {
    return parseFloat((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const className: string = Object.getPrototypeOf(figure).constructor.name;

  return `A ${figure.color} ${className.toLowerCase()} - ${figure.getArea()}`;
}
