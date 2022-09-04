const enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

function formatNumber(num: number): number {
  return Math.floor(num * 100) / 100;
}

type Color = 'red' | 'green' | 'blue';

function checkValue(...args: number[]): void {
  if (args.some((side) => side <= 0)) {
    throw new Error('ERROR, value should be > 0');
  }
}

export class Triangle {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    checkValue(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea():number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return formatNumber(area);
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkValue(this.radius);
  }

  getArea():number {
    return formatNumber(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public witdh: number,
    public hight: number,
  ) {
    checkValue(this.witdh, this.hight);
  }

  getArea():number {
    return this.witdh * this.hight;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
