type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
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
      throw new Error('Please enter correct side values');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('The side value cant be more then sum of two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
     * (semiPerimeter - a)
     * (semiPerimeter - b)
     * (semiPerimeter - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius value must be more then 0');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides of rectangle  must be more then 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
