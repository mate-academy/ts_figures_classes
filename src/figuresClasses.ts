export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {}
  getArea(): number {
    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('your error message');
    }
    const maxValue: number = Math.max(this.a, this.b, this.c);
    const isValid: boolean = maxValue >= this.a + this.b + this.c - maxValue;
    if (isValid) {
      throw new Error('your error message');
    }
    const p: number = (1 / 2) * (this.a + this.b + this.c);
    const s: number = p * (p - this.a) * (p - this.b) * (p - this.c);

    return +Math.sqrt(s).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: 'circle',
  ) {}
  getArea(): number {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
    return (Math.round(this.radius * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    readonly shape: 'rectangle',
  ) {}
  getArea(): number {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
    return (Math.round(this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
