type Color = 'red'|'green'|'blue';
type Figures = 'triangle'|'circle'|'rectangle';

export interface Figure {
  color: Color;
  shape: Figures;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Figures = 'triangle';

  constructor(public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number) {
    const max = Math.max(sideA, sideB, sideC);

    if ((max >= (sideA + sideB + sideC - max)) || (sideA <= 0)
    || (sideB <= 0) || (sideC <= 0)) {
      throw new Error(`Attention! can not create ${this.shape}`);
    }
  }

  getArea(): number {
    const avg = (this.sideA + this.sideB + this.sideC) / 2;
    const area = +(Math.sqrt(avg
      * (avg - this.sideA)
      * (avg - this.sideB) * (avg - this.sideC))).toFixed(2);

    return area;
  }
}

export class Circle implements Figure {
  shape: Figures = 'circle';

  constructor(public color:Color, public radius:number) {
    if (radius <= 0) {
      throw new Error(`Attention!!! can not create a ${this.shape}`);
    }
  }

  getArea(): number {
    const AreaLong = Math.PI * this.radius * this.radius;
    const area = (Math.floor(AreaLong * 100)) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Figures = 'rectangle';

  constructor(public color: Color, public width: number,
    public height: number) {
    if ((height <= 0) || (width <= 0)) {
      throw new Error(`Attention!!! can not create a ${this.shape}`);
    }
  }

  public getArea(): number {
    const area = +(this.height * this.width).toFixed(2);

    return area;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
