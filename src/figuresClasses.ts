type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape : Shape;
  color: Color;
  getArea(): number;
}

function getRoundedDigit(digit: number): number {
  return Math.floor(digit * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Achtnung, some passed values are lower than 0!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Its not a triangle bro ;c');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimetr: number = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - a) * (semiPerimetr - b) * (semiPerimetr - c));

    return getRoundedDigit(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('We dont have a RADIUZ');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return getRoundedDigit(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Bruh, we dont have at least one parametr');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRoundedDigit(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
