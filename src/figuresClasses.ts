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
    const maxSide = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Triangle inequality violated');
    }

    if (a <= 0) {
      throw new Error('Side a must be greater than 0');
    }

    if (b <= 0) {
      throw new Error('Side b must be greater than 0');
    }

    if (c <= 0) {
      throw new Error('Side c must be greater than 0');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiPerimetr *
            (semiPerimetr - this.a) *
            (semiPerimetr - this.b) *
            (semiPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be greater than 0');
    }

    if (height <= 0) {
      throw new Error('Height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
