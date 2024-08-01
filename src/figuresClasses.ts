type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    const biggestSide = Math.max(aSide, bSide, cSide);
    const arr = [aSide, bSide, cSide];
    let count = 0;

    for (const item of arr) {
      if (item !== biggestSide) {
        count += item;
      }
    }

    if (aSide <= 0 || bSide <= 0 || cSide <= 0 || biggestSide >= count) {
      throw new Error('You have problem with riangle side size');
    }
  }

  getArea(): number {
    const formulaGerona = (this.aSide + this.bSide + this.cSide) / 2;

    return (
      Math.floor(
        Math.sqrt(
          formulaGerona *
            (formulaGerona - this.aSide) *
            (formulaGerona - this.bSide) *
            (formulaGerona - this.cSide),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('You have probem with circle radius size');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('You have problem with rectangle width or height size');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
