export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Imposible to be a triangle');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[1] + sides[0]) {
      throw new Error('Imposible to be a triangle');
    }
  }

  getArea = (): number => {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  };
}

export class Circle implements Figure {
  public shape: 'circle';

  private radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Imposible to be a circle');
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  };
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  private width: number;

  private height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.shape = 'rectangle';

    if (height <= 0 || width <= 0) {
      throw new Error('Imposible to be a rectangle');
    }
  }

  getArea = (): number => {
    return Math.floor(this.width * this.height * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
