type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side cannot be negative or equal to zero');
    }

    if (this.a + this.b <= this.c
        || this.b + this.c <= this.a
        || this.a + this.c <= this.b) {
      throw new Error('Sides you are passing do not form triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c))).toFixed(2));
  }
}

export class Circle {
  public shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return Number((Number(Math.PI.toFixed(2)) * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid height or width');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
