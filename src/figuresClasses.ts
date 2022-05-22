type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export function throwError(...args: number[]): void {
  if (args.some((item: number) => item <= 0)) {
    throw new Error('Length is less or queal 0');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public aSideOfTriangle: number,
    public bSideOfTriangle: number,
    public cSideOfTriangle: number,
  ) {
    const arr: number[] = [aSideOfTriangle, bSideOfTriangle, cSideOfTriangle];

    arr.sort((x: number, y: number) => x - y);

    if (arr[2] >= (arr[0] + arr[1])) {
      throw new Error('side of a triangle is >= than a sum of two others');
    }

    throwError(aSideOfTriangle, bSideOfTriangle, cSideOfTriangle);
  }

  getArea(): number {
    const s = (this.aSideOfTriangle + this.bSideOfTriangle
        + this.cSideOfTriangle) / 2;

    return Math.floor(Math.sqrt(s * (s - this.aSideOfTriangle)
      * (s - this.bSideOfTriangle) * (s - this.cSideOfTriangle)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    throwError(radius);
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    throwError(width, height);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
