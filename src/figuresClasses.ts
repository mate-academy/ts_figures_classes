type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  color: Colors;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || (a + b) <= c || (a + c) <= b || (b + c) <= a) {
      throw new Error('Please, enter correct sizes!');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Please, enter correct radius!');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius * this.radius);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Please, enter correct sizes!');
    }
  }

  getArea(): number {
    const area: number = (this.width * this.height);

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
