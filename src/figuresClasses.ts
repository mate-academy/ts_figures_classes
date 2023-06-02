type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The parameters have wrong values!');
    }

    if (
      this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b
    ) {
      throw new Error(
        `The longest side of a ${this.shape} is longer than sum of two others!`,
      );
    }
  }

  getArea(): number {
    const semiperimetr = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      semiperimetr * (semiperimetr - this.a)
      * (semiperimetr - this.b)
      * (semiperimetr - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('There is uncorrect value!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The parameters have wrong values!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
