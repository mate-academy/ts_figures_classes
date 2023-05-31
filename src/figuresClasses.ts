export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    function properTriangle(
      aSide: number,
      bSide: number,
      cSide: number,
    ): boolean {
      const allSides = [aSide, bSide, cSide];
      const longgestSide = Math.max(aSide, bSide, cSide);
      const sumOfshorterSides = allSides
        .filter((side) => side !== longgestSide)
        .reduce((total, side) => total + side);

      return longgestSide < sumOfshorterSides;
    }

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || !properTriangle(this.a, this.b, this.c)
    ) {
      throw new Error('Error: unacceptable parameter provided.');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      halfP
      * (halfP - this.a)
      * (halfP - this.b)
      * (halfP - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Error: unacceptable parameter provided.');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error: unacceptable parameter provided.');
    }
  }

  getArea(): number {
    return Math.floor((this.height * this.width) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
