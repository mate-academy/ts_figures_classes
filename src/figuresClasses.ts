type Color = 'red' | 'blue' | 'green';
type Shape = 'circle' | 'triangle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    this.shape = 'triangle';

    const isSmallerThanZero = this.a <= 0 || this.b <= 0 || this.c <= 0;
    const isSmallerSideA = (this.c + this.b) <= this.a;
    const isSmallerSideB = (this.c + this.a) <= this.b;
    const isSmallerSideC = (this.b + this.a) <= this.c;
    const isTriangle = isSmallerSideA || isSmallerSideB || isSmallerSideC;

    if (isSmallerThanZero) {
      throw new Error('You can\'t make a triangle with negative number(s)');
    }

    if (isTriangle) {
      throw new Error(`Sides ${a},
       ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea():number {
    const semiperimetr = 0.5 * (this.a + this.b + this.c);
    const area = Math
      .sqrt(semiperimetr * (semiperimetr - this.a)
      * (semiperimetr - this.b) * (semiperimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(public color:Color, public radius:number) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error(`You can't make a circkle with this radius:${radius}`);
    }
  }

  public getArea():number {
    const pi = Math.PI;

    return Math.floor((pi * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color:Color,
    public width: number,
    public height:number,
  ) {
    this.shape = 'rectangle';

    const isSmallerThanOne = this.width <= 0 || this.height <= 0;

    if (isSmallerThanOne) {
      throw new Error(
        `You can't make a rectangle with whidth:${width} and height:${height}`,
      );
    }
  }

  public getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
