type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const min: number[] = [a, b, c].filter((num: number) => num <= 0);
    const max: number = Math.max(a, b, c);

    switch (min.length) {
      case 3:
        throw new Error(
          `${min[0]}, ${min[1]} and ${min[2]} invalid data entered`,
        );

      case 2:
        throw new Error(`${min[0]} and ${min[1]} invalid data entered`);

      case 1:
        throw new Error(`${min[0]} Invalid data entered`);

      default:
        break;
    }

    if (max >= a + b || max >= a + c || max >= b + c) {
      throw new Error('Max side is too long');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`${radius} impossible value for radius`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 && height <= 0) {
      throw new Error('Data entered incorrectly');
    }

    if (width <= 0) {
      throw new Error('Width data entered incorrectly');
    }

    if (height <= 0) {
      throw new Error('Height data entered incorrectly');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
