export interface Figure {
  color: 'red' | 'green' | 'blue',
  shape: 'triangle' | 'circle' | 'rectangle',
  getArea(): number
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const biggestSide: number = Math.max(a, b, c);
    const error: string = `Sides ${a}, ${b}`
    + `and ${c} can't form a triangle`;

    switch (biggestSide) {
      case a:
        if ((b + c) <= a) {
          throw new Error(error);
        }
        break;
      case b:
        if ((a + c) <= b) {
          throw new Error(error);
        }
        break;

      default:
        if ((a + b) <= c) {
          throw new Error(error);
        }
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public heigh: number,
  ) {
    if (width <= 0 || heigh <= 0) {
      throw new Error('Rectangle is not valid');
    }

    this.color = color;
    this.width = width;
    this.heigh = heigh;
  }

  getArea(): number {
    return this.width * this.heigh;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
