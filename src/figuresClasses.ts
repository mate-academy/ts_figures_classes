type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
        || this.a >= this.b + this.c
        || this.b >= this.c + this.a
        || this.c >= this.b + this.a) {
      throw new Error('Side must be the correct length');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be the correct length');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be the correct length');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
