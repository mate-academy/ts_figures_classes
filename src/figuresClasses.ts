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
  const [a, b, c] = sides;

  if (sides.length === 3) {
    return !(a < (b + c) && b < (a + c) && c < (a + b));
  }

  return sides.some((side: number) => side <= 0);
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (checkInvalidForm(a, b, c)) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return truncate(
      Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)),
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, private radius: number) {
    if (checkInvalidForm(radius)) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    return truncate(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(public color: Color,
    private width: number, private height: number) {
    if (checkInvalidForm(height, width)) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    return truncate(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
