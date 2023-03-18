type Shape = 'triangle' | 'circle' | 'rectangle';

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
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('The longest side less or equal than sum of two others');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any side cannot be zero or les');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return (Math.round(area * 100) / 100);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length is zero or less');
    }
  }

  getArea(): number {
    return (Math.floor(Math.PI * (this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any length cannot be less zero or less');
    }
  }

  getArea(): number {
    return (Math.round(this.width * this.height * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
