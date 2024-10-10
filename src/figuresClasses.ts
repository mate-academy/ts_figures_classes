export interface Figure {
  getArea(): number;
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  public color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  };
}

export class Circle implements Figure {
  public shape: string = 'circle';

  public color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea = (): number => {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  public color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
