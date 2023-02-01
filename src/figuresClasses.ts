export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    switch (true) {
      case this.a <= 0:
      case this.b <= 0:
      case this.c <= 0:
        throw new Error('The side length must be greater than 0');
      case this.a >= this.b + this.c:
      case this.b >= this.a + this.c:
      case this.c >= this.b + this.a:
        throw new Error(
          'The longest side length must be less sum of other two sides',
        );
      default:
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(public color: string, public radius: number) {
    switch (true) {
      case this.radius <= 0:
        throw new Error('The radius must be greater than 0');
      default:
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    switch (true) {
      case this.width <= 0:
      case this.height <= 0:
        throw new Error('The side length must be greater than 0');
      default:
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
