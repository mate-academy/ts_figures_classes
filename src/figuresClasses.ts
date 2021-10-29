type Color = ('red' | 'green' | 'blue');
type Shape = ('triangle' | 'circle' | 'rectangle');

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function truncate(number: number): number {
  return Math.floor(number * 100) / 100;
}

function checkInvalidForm(...sides: number[]): boolean {
  if (sides.length === 3) {
    return !(sides[0] < (sides[1] + sides[2])
          && sides[1] < (sides[0] + sides[2])
          && sides[2] < (sides[0] + sides[1]));
  }

  return sides.some((side: number) => side <= 0);
}

export class Triangle implements Figure {
  public shape;

  constructor(public color: Color,
    private a: number, private b: number, private c: number) {
    if (checkInvalidForm(a, b, c)) {
      throw new Error('Wrong data');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return truncate(
      Math.sqrt(semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape;

  constructor(public color: Color, private radius: number) {
    if (checkInvalidForm(radius)) {
      throw new Error('Wrong data');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return truncate(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape;

  constructor(public color: Color,
    private width: number, private height: number) {
    if (checkInvalidForm(height, width)) {
      throw new Error('Wrong data');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return truncate(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
