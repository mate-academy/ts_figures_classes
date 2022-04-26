type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((argument: number) => argument <= 0)) {
      throw new Error('Sides can not be less than 0');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error('Is not triangle');
    }
  }

  getArea(): number {
    return Math.floor((Math.sqrt(4 * this.a ** 2 * this.b ** 2
    - (this.a ** 2 + this.b ** 2 - this.c ** 2) ** 2)) * 0.25 * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can not be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ([width, height].some((argument: number) => argument <= 0)) {
      throw new Error('Sides can not be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
