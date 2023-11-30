type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
type GetArea = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: GetArea;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const firstSide = a + b <= c;
    const secondSide = b + c <= a;
    const thirdSide = c + a <= b;
    const aCondition = a <= 0;
    const bCondition = b <= 0;
    const cCondition = c <= 0;
    const colorCondition = color.length === 0;

    if (
      colorCondition
      || aCondition
      || bCondition
      || cCondition
      || firstSide
      || secondSide
      || thirdSide
    ) {
      throw new Error('Expected color and valid sides for a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiP = (a + b + c) / 2;

    const area = Math.sqrt(
      (semiP * (semiP - a) * (semiP - b) * (semiP - c)),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
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
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
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
