export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0)
      throw new Error(`Invalid side a: length must be greater than 0`);
    if (b <= 0)
      throw new Error(`Invalid side b: length must be greater than 0`);
    if (c <= 0)
      throw new Error(`Invalid side c: length must be greater than 0`);

    const longest: number = Math.max(a, b, c);
    const sumOthers: number = a + b + c - longest;

    if (longest >= sumOthers) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Invalid radius: must be greater than 0`);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (width <= 0) throw new Error(`Invalid width: must be greater than 0`);
    if (height <= 0) throw new Error(`Invalid height: must be greater than 0`);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
