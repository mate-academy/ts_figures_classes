type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
  }

  getArea(): number {
    const hp: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(hp * (hp - this.a)
    * (hp - this.b) * (hp - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
  }

  getArea(): number {
    const area: number = 3.14 * (this.radius ** 2);

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return +area.toFixed(3);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
