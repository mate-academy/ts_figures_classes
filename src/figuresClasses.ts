export interface Figure {
  shape:string,
  color:string,
  getArea: () =>{}
}

function roundedDownToHundredths(area:number):number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color:string,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (!this.isValidSides()) {
      throw new Error('incorrect sides of triangle');
    }

    if (!this.isTriangle()) {
      throw new Error('this is not triangle');
    }

    this.color = color;
  }

  getArea = ():number => {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundedDownToHundredths(area);
  };

  private isValidSides():boolean {
    return this.a > 0 && this.b > 0 && this.c > 0;
  }

  private isTriangle():boolean {
    const sides = [this.a, this.b, this.c];

    sides.sort((a, b) => a - b);

    return sides[0] + sides[1] > sides[2];
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(public color:string, public radius:number) {
    if (this.radius <= 0) {
      throw new Error('incorrect radius');
    }

    this.color = color;
  }

  getArea = ():number => {
    const area = Math.PI * this.radius * this.radius;

    return roundedDownToHundredths(area);
  };
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color:string,
    public width:number,
    public height:number,
  ) {
    if (!this.isValidSides()) {
      throw new Error('incorrect sides');
    }

    this.color = color;
  }

  getArea = ():number => {
    return this.width * this.height;
  };

  private isValidSides() : boolean {
    return this.width > 0 && this.height > 0;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
