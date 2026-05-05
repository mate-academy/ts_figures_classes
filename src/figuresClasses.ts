export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sumOfMinNums = a + b + c - Math.max(a, b, c);

    if (Math.max(a, b, c) >= sumOfMinNums) {
      throw new Error(
        `Triangle with sides ${a}, ${b}, ${c} cannot be formed because the longest side is >= sum of other sides`,
      );
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side must be greater than 0');
    }
  }

  getArea(): number {
    const side = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      side * (side - this.a) * (side - this.b) * (side - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
