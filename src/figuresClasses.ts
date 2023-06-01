function validateFigure(...paramentrs: number[]): void {
  if (paramentrs.some((el) => el <= 0)) {
    throw new Error('Error: unacceptable parameter provided.');
  }
}

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

    function isItProperTriangle(
      aSide: number,
      bSide: number,
      cSide: number,
    ): boolean {
      const allSides = [aSide, bSide, cSide];
      const longgestSide = allSides
        .sort((currentSide, nextSide) => nextSide - currentSide)[0];
      const sumOfshorterSides = allSides
        .filter((side) => side !== longgestSide)
        .reduce((total, side) => total + side);

      return longgestSide < sumOfshorterSides;
    }

    validateFigure(this.a, this.b, this.c);

    if (!isItProperTriangle(this.a, this.b, this.c)) {
      throw new Error('Error: the longest side of a triangle'
      + ' is bigger (or equal) than a sum of two others');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
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

    validateFigure(this.radius);
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

    validateFigure(this.width, this.height);
  }

  getArea(): number {
    return Math.floor((this.height * this.width) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
