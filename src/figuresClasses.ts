type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const min: number[] = [a, b, c].filter((e: number) => e <= 0);
    const max: number = Math.max(a, b, c);

    switch (min.length) {
      case 3:
        throw new Error(`${min[0]}, ${min[1]} and ${min[2]} aren't valid data`);

      case 2:
        throw new Error(`${min[0]} and ${min[2]} aren't valid data`);

      case 1:
        throw new Error(`${min[0]} aren't valid data`);

      default:
        break;
    }

    if (max >= b + c || max >= a + c || max >= a + b) {
      throw new Error(`side ${max} is too long`);
    }
  }

  getArea(): number {
    const ro: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(ro * (ro - this.a)
      * (ro - this.b) * (ro - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`${radius} impossible value for radius`);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 && height <= 0) {
      throw new Error('Impossible size value to width and height');
    }

    if (width <= 0) {
      throw new Error(`${width} impossible size value`);
    }

    if (height <= 0) {
      throw new Error(`${height} impossible size value`);
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
