type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green  ' | 'blue';

export interface Figure {
  readonly shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some length is <= 0');
    }

    const sidesValue = [a, b, c];
    const biggestNum = Math.max(...sidesValue);
    const otherNumsSum = sidesValue.reduce(
      (acc, current) => acc + current,
      -biggestNum,
    );

    if (biggestNum >= otherNumsSum) {
      throw new Error(`sides ${a}, ${b} and ${c} can not form a triangle`);
    }
  }

  getArea(): number {
    const semip = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semip * (semip - this.a) * (semip - this.b) * (semip - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape;

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('some length is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
