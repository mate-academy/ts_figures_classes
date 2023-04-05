type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isNotValid = a <= 0 || b <= 0 || c <= 0;
    const longestSide = this.a >= b + c || this.b >= c + a || this.c >= a + b;

    if (isNotValid || longestSide) {
      // eslint-disable-next-line max-len
      throw new Error('The incorrect value passed! The value should be bigger than 0, and the longes side cannot be bigger than the sum of the other 2 sides');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be bigger than 0');
    }
  }

  getArea():number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height should be bigger than 0');
    }
  }

  getArea():number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
