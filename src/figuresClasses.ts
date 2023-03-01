export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

const errorMessage = 'The digit cannot be less than 0 or equal to 0';

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(errorMessage);
    }

    const maxSide = Math.max(a, b, c);

    if (maxSide >= (a + b + c) - maxSide) {
      throw new Error('The max side should be less than a sum of two other');
    }
  }

  getArea(): number {
    const semiPerimeter = 0.5 * (this.a + this.b + this.c);
    const area = Math.floor(
      Math.sqrt(
        semiPerimeter
        * (semiPerimeter - this.a)
        * (semiPerimeter - this.b)
        * (semiPerimeter - this.c),
      ) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (this.radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
