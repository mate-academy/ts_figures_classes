function errorParams(...args: number[]): boolean {
  return args.some((el: number): boolean => {
    return el <= 0;
  });
}

type Form = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Form;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Form = 'triangle';

  static goodTriangle(a: number, b: number, c: number): boolean {
    if (a >= b + c || b >= a + c || c >= b + a) {
      return true;
    }

    return false;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (errorParams(a, b, c)) {
      throw new Error("Error: sides can't be less than 0");
    }

    if (Triangle.goodTriangle(a, b, c)) {
      throw new Error('Error: this triangle is impossible');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Form = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (errorParams(radius)) {
      throw new Error("Error: sides can't be less than 0");
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Form = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (errorParams(a, b)) {
      throw new Error("Error: sides can't be less than 0");
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
