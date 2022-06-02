export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red'| 'green'| 'blue',
  getArea: () => number
}

export class Triangle implements Figure {
  constructor(
    public color: 'red'| 'green'| 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const noSideLength: boolean = (a <= 0 || b <= 0 || c <= 0);
    const cantFormTriangle: boolean = a >= b + c || b >= a + c || c >= a + b;

    if (cantFormTriangle || noSideLength) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  public shape: 'triangle' = 'triangle';

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return +(area).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red'| 'green'| 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  public shape: 'circle' = 'circle';

  getArea(): number {
    return +(Math.floor((Math.PI * (this.radius * this.radius)) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red'| 'green'| 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Entered wrong ${this.shape} size`);
    }
  }

  public shape: 'rectangle' = 'rectangle';

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
