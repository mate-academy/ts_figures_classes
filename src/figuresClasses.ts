
// eslint-disable-next-line @typescript-eslint/naming-convention
type color = 'red' | 'green' | 'blue';
// eslint-disable-next-line @typescript-eslint/naming-convention
type shape = 'triangle'| 'circle' |'rectangle';

export interface Figure {
  shape: shape;
  color: color;
  getArea():number

}

export class Triangle implements Figure {
  color: color;

  a:number;

  b:number;

  c:number;

  shape:shape = 'triangle';

  constructor(color:color, a:number, b:number, c:number) {
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
  color:color;

  radius:number;

  shape:shape = 'circle';

  constructor(color:color, radius:number) {
    this.color = color;
    this.radius = radius;

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
  color: color;

  width:number;

  height:number;

  shape:shape = 'rectangle';

  constructor(color:color, width:number, height:number) {
    this.color = color;
    this.width = width;
    this.height = height;

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
  const { color } = figure;
  const { shape } = figure;
  const Area = figure.getArea();

  return `A ${color} ${shape} - ${Area}`;
}
