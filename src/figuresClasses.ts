export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validate();
  }

  public validate(): void {
    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b ||
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0
    ) {
      throw new Error(
        `throws an error: sides ${this.a}, ${this.b}, ${this.c} can't form a triangle`,
      );
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.validate();
  }

  public validate(): void {
    if (this.radius <= 0) {
      throw new Error(
        `throws an error: radius ${this.radius} can't form a circle`,
      );
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.validate();
  }

  public validate(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        `throws an error: sides ${this.width} and ${this.height} can't form a rectangle`,
      );
    }
  }

  public getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
