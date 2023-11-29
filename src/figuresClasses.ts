export interface Figure {
  shape: string;
  color: string;
  getArea: Function;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      color.length === 0
      || a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || b + c <= a
      || c + a <= b
    ) {
      throw new Error('Expected color and valid sides for a triangle');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      (semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c)),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (
      color.length === 0
      || radius <= 0
    ) {
      throw new Error('Expected color and radius > 0');
    }
  }

  getArea(): number {
    const area = (this.radius ** 2) * Math.PI;

    return Math.floor((area * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width : number,
    public height : number,
  ) {
    if (
      color.length === 0
      || width <= 0
      || height <= 0
    ) {
      throw new Error('Expected color and each side > 0');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const figureType: string = figure.shape;
  const figureColor: string = figure.color;
  const figureArea: number = figure.getArea();

  const infoResult = `A ${figureColor} ${figureType} - ${figureArea}`;

  return infoResult;
}
