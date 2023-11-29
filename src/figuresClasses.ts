type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape:Shape,
  color:Color,
  getArea():number,
}

const isValid = (...items: number[]): void => {
  if (items.some((num) => num <= 0)) {
    throw new Error('Params should be more than 0');
  }
};

const rounder = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    isValid(a, b, c);

    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Wrong sides for a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter: number = (a + b + c) / 2;

    return rounder(Math.sqrt(
      semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    ));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
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
      throw new Error('Invalid rectangle sides');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
