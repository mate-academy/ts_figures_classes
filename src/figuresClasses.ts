type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape:Shape;
  color:Color;
  getArea():number;
}

export class Triangle implements Figure {
  public shape:Shape ='triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('The side is a positive value');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`The longest side of a triangle cannot be greater
        than the sum of the other two`);
    }
  }

  getArea():number {
    const p :number = (this.a + this.b + this.c) / 2;
    const s :number = p * (p - this.a) * (p - this.b) * (p - this.c);

    return Math.floor(Math.sqrt(s) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape:Shape = 'circle';

  constructor(
    public color:'red' | 'green' | 'blue',
    public radius:number,
  ) {
    if (radius < 0) {
      throw new Error('Radius is a positive value');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color:'red' | 'green' | 'blue',
    public width:number,
    public height:number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('The side is a positive value');
    }
  }

  getArea():number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
