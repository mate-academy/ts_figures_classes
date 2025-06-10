type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}
export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error();
    }
  }

  getArea(): number {
    const s: number = +((this.a + this.b + this.c) / 2).toFixed(2);

    return parseFloat(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}
export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    if (this.radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}
export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
