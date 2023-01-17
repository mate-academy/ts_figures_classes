
export interface Figure {
  shape:string;
  color:string;
  getArea:Function;
}

export class Triangle implements Figure {
  shape = 'triangle';

  getArea():number {
    const p:number = 0.5 * (this.aSide + this.bSide + this.cSide);

    const s:number = Math.floor(Math.sqrt(p * (p - this.aSide)
    * (p - this.bSide) * (p - this.cSide)) * 100) / 100;

    return s;
  }

  constructor(
    public color:string,
    public aSide:number,
    public bSide:number,
    public cSide:number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('invalid side length');
    }

    if (aSide + bSide <= cSide || aSide + cSide <= bSide
      || bSide + cSide <= aSide) {
      throw new Error('these sides can\'t form a triangle');
    }
  }
}

export class Circle implements Figure {
  shape = 'circle';

  getArea():number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }

  constructor(
    public color:string,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid side length');
    }
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  getArea():number {
    return Math.floor(this.height * this.width * 100) / 100;
  }

  constructor(
    public color:string,
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid side length');
    }
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
