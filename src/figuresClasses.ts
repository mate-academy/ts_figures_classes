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

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const A = Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(A * 100) / 100;
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

  public getArea(): number {
    const A = Math.PI * (this.radius ** 2);

    return (Math.floor(A * 100)) / 100;
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

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
