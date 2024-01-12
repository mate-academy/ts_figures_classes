
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

function isInvalidFigure(shape: Shape, ...rest: number[]): boolean {
  if (shape === 'triangle') {
    const [a, b, c] = rest;
    const biggestSide = Math.max(a, b, c);
    const isIncorrectSides = biggestSide >= a + b + c - biggestSide;

    if (a <= 0 || b <= 0 || c <= 0 || isIncorrectSides) {
      return true;
    }

    return false;
  }

  if (shape === 'circle') {
    const [radius] = rest;

    if (radius <= 0) {
      return true;
    }

    return false;
  }

  if (shape === 'rectangle') {
    const [width, height] = rest;

    if (width <= 0 || height <= 0) {
      return true;
    }

    return false;
  }

  return true;
}

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
    if (isInvalidFigure('triangle', a, b, c)) {
      throw new Error('Incorrect sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.floor((Math.sqrt(s * (s - this.a)
      * (s - this.b)
      * (s - this.c)))
      * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (isInvalidFigure('circle', radius)) {
      throw new Error('Radius should be bigger than 0');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (isInvalidFigure('rectangle', width, height)) {
      throw new Error('Width and height should be bigger than 0');
    }
  }

  getArea(): number {
    const area = Math.floor((this.width * this.height) * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
