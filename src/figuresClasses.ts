type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type Func = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Func;
}

export class Triangle implements Figure {
  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    const arr = [a, b, c].sort((side1, side2) => side2 - side1);

    if (a <= 0 || b <= 0 || c <= 0 || arr[0] >= arr[1] + arr[2]) {
      throw new Error('Invalid data');
    }
  }

  shape:Shape = 'triangle';

  getArea = ():number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b)
    * (s - this.c));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  shape:Shape = 'circle';

  getArea = ():number => Math.floor(Math.PI * this.radius * this.radius
    * 100) / 100;
}

export class Rectangle implements Figure {
  constructor(
    public color:Color,
    public width: number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }

  shape:Shape = 'rectangle';

  getArea = ():number => this.height * this.width;
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
