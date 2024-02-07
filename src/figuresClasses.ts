type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea():number,
}

function roundDownToHundredths(num: number):number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('No triangle side length can be 0 or less');
    }

    if (Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c)) {
      throw new Error(
        'The longest side of a triangle cannot be >= than a sum of two others',
      );
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return roundDownToHundredths(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius cannot be 0 or less');
    }
  }

  getArea():number {
    return roundDownToHundredths(Math.PI * this.radius * this.radius);
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
      throw new Error('No rectangle side length can be 0 or less');
    }
  }

  getArea():number {
    return roundDownToHundredths(this.width * this.height);
  }
}

type Figures = Triangle | Circle | Rectangle;

export function getInfo(figure: Figures):string {
  const { shape, color } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
