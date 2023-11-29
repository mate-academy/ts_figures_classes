type Color = 'red' | 'blue' | 'green';
export interface Figure {
  shape: 'circle'| 'triangle' | 'rectangle';
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('You can\'t make a triangle with negative number(s)');
    }

    if ((this.a + this.b) <= this.c) {
      throw new Error(`Sides ${a},
       ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea():number {
    const p:number = 0.5 * (this.a + this.b + this.c);
    const area:number = Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(public color:Color, public radius:number) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error(`You can't make a circkle with this radius:${radius}`);
    }
  }

  public getArea():number {
    const pi:number = Math.PI;

    return Math.floor((pi * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color:Color,
    public width: number,
    public height:number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`You can't make a rectangle with
         this whidth:${this.width} and height:${this.height} `);
    }
  }

  public getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
