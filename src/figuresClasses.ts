export interface Figure {
  color: string,
  shape: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The triangle\'s side can\'t by less than 1');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.b <= this.a) {
      throw new Error(`It's not a ${this.shape}`);
    }
  }

  getArea():number {
    const perim = (this.a + this.b + this.c) / 2;
    const area = perim * (perim - this.a) * (perim - this.b) * (perim - this.c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
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
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape}`
  + ` - ${figure.getArea()}`;
}
