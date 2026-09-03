export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function toHundredths(number: number): number {
  const stringNumber: string = String(number);
  const indexOfDot = stringNumber.indexOf('.');

  if (indexOfDot !== -1) {
    return Number(stringNumber.slice(0, stringNumber.indexOf('.') + 3));
  }

  return Number(stringNumber);
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('You entered invalid length');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'The longest side of a triangle must be less than a sum of two others',
      );
    }
  }

  public getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return toHundredths(
      (semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c)) **
        0.5,
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('You entered invalid radius');
    }
  }

  public getArea(): number {
    return toHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('You entered invalid length');
    }
  }

  public getArea(): number {
    return toHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
