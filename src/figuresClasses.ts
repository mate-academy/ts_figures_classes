type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function toFixed(num: number, fixed: number): number {
  if (fixed <= 0) {
    return +num.toString();
  }

  const numToStr = num.toString();
  const pointIndex = numToStr.split('').indexOf('.');
  let result = numToStr;

  if (pointIndex > 0) {
    result = numToStr.slice(0, pointIndex + 1 + fixed);
  }

  return +result;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const area
    = Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c));

    return toFixed(area, 2);
  }

  constructor(
    public color: Color, public a: number, public b: number, public c: number,
  ) {
    if (arguments.length <= 0) {
      throw new Error('Arguments length cannot be less or equal to zero');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be > 0');
    }

    const longestSide = Math.max(a, b, c);
    const shortestSide = Math.min(a, b, c);
    const lastSide = (a + b + c) - longestSide - shortestSide;

    if (longestSide >= shortestSide + lastSide) {
      throw new Error('The longest side of a triangle is'
      + '>= than a sum of two others');
    }
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  getArea(): number {
    return toFixed((Math.PI * this.radius * this.radius), 2);
  }

  constructor(
    public color: Color, public radius: number,
  ) {
    if (arguments.length <= 0) {
      throw new Error('Arguments length cannot be less or equal to zero');
    }

    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  getArea(): number {
    const area = this.height * this.width;

    return toFixed(area, 2);
  }

  constructor(
    public color: Color, public width: number, public height: number,
  ) {
    if (arguments.length <= 0) {
      throw new Error('Arguments length cannot be less or equal to zero');
    }

    if (height <= 0 || width <= 0) {
      throw new Error('All sides should be > 0');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
