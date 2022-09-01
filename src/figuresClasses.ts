
function roundedArea(area:number):number {
  return Math.floor(area * 100) / 100;
}

function checkArg(arg: number):void {
  if (arg <= 0) {
    throw new Error('One of side or radius <= 0');
  }
}

type Color = 'red' | 'green' | 'blue';
enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shapes.Triangle;

  constructor(
    // public shape:Shapes,
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    [sideA, sideB, sideC].some((side):void => checkArg(side));

    if (sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideA + sideC <= sideB) {
      throw new Error('sides 1, 2 and 3 can`t form a triangle');
    }
  }

  getArea():number {
    const semiPerimeter:number = (this.sideA + this.sideB + this.sideC) / 2;

    return roundedArea(Math.sqrt(semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC)));
  }
}

export class Circle implements Figure {
  public shape = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkArg(radius);
  }

  public getArea():number {
    return roundedArea(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    [width, height].forEach((side):void => checkArg(side));
  }

  public getArea():number {
    return roundedArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
