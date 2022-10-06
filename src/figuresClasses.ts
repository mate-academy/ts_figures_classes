
type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle'| 'circle' |'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea():number

}

export class Triangle implements Figure {
  color: Color;

  a:number;

  b:number;

  c:number;

  shape:Shape = 'triangle';

  constructor(color:Color, a:number, b:number, c:number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    this.checkTriangle();
  }

  getArea():number {
    const semiPer = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c),
    );

    return Math.round(area * 100) / 100;
  }

  checkTriangle():void {
    const sides = [this.a, this.b, this.c].sort((a, b) => b - a);

    if (sides[0] >= sides[1] + sides[2]
      || sides[0] < 0
      || sides[1] < 0
      || sides[2] < 0
    ) {
      throw new Error('Invalid shape settings');
    }
  }
}

export class Circle implements Figure {
  shape:Shape = 'circle';

  constructor(
    public color:Color,
    public radius:number,
  ) {
    this.checkCircle();
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }

  checkCircle():void {
    if (this.radius < 0) {
      throw new Error('Invalid shape settings');
    }
  }
}

export class Rectangle implements Figure {
  shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public width:number,
    public height:number,
  ) {
    this.checkRectangle();
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }

  checkRectangle():void {
    if (this.width < 0 || this.height < 0) {
      throw new Error('Invalid shape settings');
    }
  }
}

export function getInfo(figure:Figure):string {
  const { color, shape } = figure;
  const Area = figure.getArea();

  return `A ${color} ${shape} - ${Area}`;
}
