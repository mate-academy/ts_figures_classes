type Color = 'red' | 'green' | 'blue';

type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
}

function nonNegativeSides(...sides: number[]): void {
  if (Math.min(...sides) <= 0) {
    throw new Error(`sides can't be negative`);
  }
}

function roundToHundredths(num: number): number {
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
    nonNegativeSides(a, b, c);

    const maxSide = Math.max(a, b, c);

    if (maxSide * 2 >= a + b + c) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = 0.5 * (this.a + this.b + this.c);

    return roundToHundredths(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    nonNegativeSides(radius);
  }

  getArea(): number {
    return roundToHundredths(Math.PI * (this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    nonNegativeSides(width, height);
  }

  getArea(): number {
    return roundToHundredths(this.height * this.width);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
