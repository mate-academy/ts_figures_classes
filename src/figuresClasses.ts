type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color
  shape: Shape
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('Value can\'t be less than 1');
    }
  }

  getArea():number {
    const halpP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(halpP * (halpP - this.a)
      * (halpP - this.b) * (halpP - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Value can\'t be less than 1');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Value can\'t be less than 1');
    }
  }

  getArea() : number {
    return this.width * this.height;
  }
}

export function getInfo(figure : Figure) :string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
