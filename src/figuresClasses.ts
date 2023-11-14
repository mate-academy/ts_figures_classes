function round(x:number):number {
  return Math.floor(100 * x) / 100;
}

export interface Figure {
  shape: string,
  color: string,
  getArea():number;
}

export class Triangle implements Figure {
  shape:string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides have to be > 0');
    }

    if (a + b <= c
      || b + c <= a
      || a + c <= b) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = ((this.a + this.b + this.c) / 2);

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius has to be > 0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides have to be > 0');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
