export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle {
  public shape: Shape = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a)
     * (p - this.b) * (p - this.c)) * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const perimetr = this.a + this.b + this.c;
    const longestSide = Math.max(this.a, this.b, this.c);

    if (perimetr - longestSide <= longestSide) {
      throw new Error('Longest side has to be < then sum of other sides');
    }
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be positive');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
