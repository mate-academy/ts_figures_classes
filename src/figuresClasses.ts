export interface Figure {
  shape: string;
  color: string;

  getArea(): number
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  aSide: number;

  bSide: number;

  cSide: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('enter valid parameter');
    }

    if (Math.max(a, b, c) * 2 >= (a + b + c)) {
      throw new Error('enter valid parameter');
    }

    this.aSide = a;
    this.bSide = b;
    this.cSide = c;
    this.color = color;
  }

  public getArea(): number {
    const s = (this.aSide + this.bSide + this.cSide) / 2;
    const area = Math.sqrt(s * (s - this.aSide)
    * (s - this.bSide) * (s - this.cSide));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  radiusCircle: number;

  shape = 'circle';

  color: string;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('enter valid parameter');
    }

    this.radiusCircle = radius;
    this.color = color;
  }

  public getArea(): number {
    const area = Math.PI * this.radiusCircle * this.radiusCircle;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  widthRec: number;

  heightRec: number;

  shape = 'rectangle';

  color: string;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('enter valid parameter');
    }

    this.widthRec = width;
    this.heightRec = height;
    this.color = color;
  }

  public getArea(): number {
    const area = this.widthRec * this.heightRec;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
