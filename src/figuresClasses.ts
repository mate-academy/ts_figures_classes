export interface Figure {
  shape: 'triangle'| 'circle' | 'rectangle'
  color: 'red'| 'green' | 'blue'
  getArea : (a:number, b:number, c:number) => number
  area?: number
}

export class Triangle implements Figure {
  public shape: 'triangle'| 'circle' | 'rectangle' = 'triangle';

  public area: number;

  getArea = ():number => {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  };

  constructor(
    public color:'red'| 'green' | 'blue',
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (!Triangle.checkValue(this.a, this.b, this.c)) {
      throw new Error('invalid parametrs for triangle');
    } else {
      this.area = +(this.getArea().toFixed(2));
    }
  }

  private static checkValue(a:number, b:number, c:number):boolean {
    return (a < b + c && a > b - c)
      && (b < a + c && b > a - c)
      && (c < a + b && c > a - b);
  }
}

export class Circle {
  public shape: 'triangle'| 'circle' | 'rectangle' = 'circle';

  public area: number;

  getArea = ():number => {
    const pi: number = 3.14;

    return +((pi * this.a * this.a).toFixed(2));
  };

  constructor(
    public color:'red'| 'green' | 'blue',
    public a:number,
  ) {
    if (this.a <= 0) {
      throw new Error('invalid radius size');
    } else {
      this.area = +(this.getArea().toFixed(2));
    }
  }
}

export class Rectangle {
  public shape: 'triangle'| 'circle' | 'rectangle' = 'rectangle';

  public area: number;

  getArea = ():number => {
    return +((this.a * this.b).toFixed(2));
  };

  constructor(
    public color:'red'| 'green' | 'blue',
    public a:number,
    public b:number,
  ) {
    if (this.a < 0 || this.b < 0) {
      throw new Error('invalid side size');
    } else {
      this.area = +(this.getArea().toFixed(2));
    }
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
