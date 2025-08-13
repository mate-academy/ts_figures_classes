export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  public colors: string[] = ['red', 'green', 'blue'];

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.colors.includes(color)) {
      throw new Error(`Color must be 'red', 'green', or 'blue'`);
    }

    const [x, y, z] = [a, b, c].sort((m, n) => m - n);

    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error(
        `Invalid sides: all sides must be > 0 (got a=${a}, b=${b}, c=${c}).`,
      );
    }

    if (z >= x + y) {
      throw new Error(
        `Triangle inequality violated: the longest side ${z} must be less than the sum of the other two sides ${x} + ${y}`,
      );
    }
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  public colors: string[] = ['red', 'green', 'blue'];

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (!this.colors.includes(color)) {
      throw new Error('Color must be red, green, or blue');
    }

    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  public colors: string[] = ['red', 'green', 'blue'];

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (!this.colors.includes(color)) {
      throw new Error('"Color must be red, green, or blue');
    }

    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width and height must be greater than 0 (got width=${width}, height=${height})`,
      );
    }
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
