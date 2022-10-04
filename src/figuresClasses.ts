function checkingZeros(...args: number[]): boolean {
  return args.some((el: number) => el <= 0);
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  static canWeMake(a: number, b: number, c: number): boolean {
    if (c >= a + b || b >= a + c || a >= b + c) {
      return false;
    }

    return true;
  }

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (checkingZeros(a, b, c)) {
      throw new Error('Error: sides can be only > 0');
    }

    if (!Triangle.canWeMake(a, b, c)) {
      throw new Error('Error: wrong sides of triangle');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const perimeter: number = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(perimeter * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (checkingZeros(radius)) {
      throw new Error('Error: sides can be only > 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
  ) {
    if (checkingZeros(a, b)) {
      throw new Error('Error: sides can be only > 0');
    }
  }

  getArea(): number {
    const area: number = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
