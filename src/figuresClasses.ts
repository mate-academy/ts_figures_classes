export interface Figure {
  color: string,
  getArea(): number,
  a?: number,
  b?: number,
  c?: number,
  radius?: number,
  width?: number,
  height?:number,
  shape?: string,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.getArea();
  }

  getArea():number {
    if (this.a + this.b > this.c) {
      if (this.b + this.c > this.a) {
        if (this.a + this.c > this.b) {
          const perimetr = (this.a + this.b + this.c) / 2;

          return Math.floor(Math.sqrt(perimetr * (perimetr - this.a)
          * (perimetr - this.b) * (perimetr - this.c)) * 100) / 100;
        }
      }
    }

    throw new Error(`It's not a ${this.shape}`);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`It's not a ${this.shape}`);
    }
  }

  getArea():number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`It's not a ${this.shape}`);
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape}`
  + ` - ${figure.getArea()}`;
}
