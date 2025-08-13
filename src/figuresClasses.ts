type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function areaByHeronsFormula(a: number, b: number, c: number): number {
  const p = (a + b + c) / 2;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      Math.min(this.a, this.b, this.c) <= 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error(
        `Triangle side lengths must be positive and satisfy the triangle inequality.`,
      );
    }
  }

  getArea(): number {
    return Math.floor(areaByHeronsFormula(this.a, this.b, this.c) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be a positive number.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (Math.min(this.width, this.height) <= 0) {
      throw new Error('Rectangle width and height must be positive numbers.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
