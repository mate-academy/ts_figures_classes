type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Can\'t have less than 0 parameter');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle extends Circle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super(color, width);

    if (height <= 0) {
      throw new Error('Side cant\'t be less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export class Triangle extends Rectangle {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(color, a, b);

    if (c <= 0) {
      throw new Error('Side cant\'t be less than 0');
    }
    this.checkSides();
  }

  private checkSides(): void {
    const longest = Math.max(this.a, this.b, this.c);
    let sum = 0;

    [this.a, this.b, this.c].forEach((val) => {
      if (val !== longest) {
        sum += val;
      }
    });

    if (longest >= sum) {
      throw new Error('Sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor((area) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
