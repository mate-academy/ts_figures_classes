export interface Figure {
  shape:string;
  color:string;
  getArea():number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color:string,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('one of the side is less or equil = 0');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error('one of sides higher then sum of others');
    }
  }

  getArea():number {
    const base = 4 * (this.a ** 2) * (this.b ** 2)
     - ((this.a ** 2) + (this.b ** 2) - (this.c ** 2)) ** 2;

    return Math.floor(1 / 4 * base ** (1 / 2) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color:string,
    public a:number,
  ) {
    if (this.a <= 0) {
      throw new Error('radius is less or equil 0');
    }
  }

  getArea(): number {
    const result = Math.floor((Math.PI * (this.a ** 2)) * 100) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color:string,
    public a:number,
    public b:number,
  ) {
    if (this.a <= 0
        || this.b <= 0) {
      throw new Error('one of the sides is less or equil 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
