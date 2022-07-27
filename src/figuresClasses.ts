type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('The side length must be bigger than 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Incorrect side length');
    }

    this.color = color;
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radis must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
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
      throw new Error('Both sides must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // eslint-disable-next-line no-console
  console.log(`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);

  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
