type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle'| 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  a: number;
  b?:number;
  c?:number;
  getArea(figure:Figure):number;
}

export class Triangle {
  public shape:Shape = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Please enter valid data');
    }

    const max = Math.max(a, b, c);

    if (max >= (a + b + c - max)) {
      throw new Error('Please enter valid data');
    }
  }

  getArea():number {
    const p = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(p
      * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape:Shape = 'circle';

  constructor(public color:Color, public a:number) {
    if (a <= 0) {
      throw new Error('Please enter valid data');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.a ** 2) * 100) / 100;
  }
}

export class Rectangle {
  public shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Please enter valid data');
    }
  }

  getArea():number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  switch (figure.shape) {
    case 'triangle':
      return `A ${figure.color} triangle - ${figure.getArea()}`;
    case 'rectangle':
      return `A ${figure.color} rectangle - ${figure.getArea()}`;
    case 'circle':
      return `A ${figure.color} circle - ${figure.getArea()}`;
    default:
      throw new Error(`Information about ${figure.shape} cannot be provided`);
  }
}
