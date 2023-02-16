type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getRound(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    if (
      a.toString().length <= 0
      || b.toString().length <= 0
      || c.toString().length <= 0
    ) {
      throw new Error('Invalid value');
    }

    const arrayOfSides: number[] = [];

    arrayOfSides.push(a, b, c);
    arrayOfSides.sort((first, second) => second - first);

    const sumOfTwoSides: number = arrayOfSides[1] + arrayOfSides[2];

    if (arrayOfSides[0] >= sumOfTwoSides) {
      throw new Error('longest side must be >= sum of two others');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) * 0.5;
    const area: number = Math.sqrt(
      semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
    );

    return getRound(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const area: number = ((this.radius ** 2) * Math.PI);

    return getRound(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return getRound(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
