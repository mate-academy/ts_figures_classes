type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error... for triangle please check');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Error... for triangle please check');
    }
  }

  getArea(): number {
    const heronS = (this.a + this.b + this.c) / 2;
    const heronArea = Math.sqrt(heronS * ((heronS - this.a)
      * (heronS - this.b) * (heronS - this.c)));

    return Math.floor((heronArea) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error... for circle please check');
    }
  }

  getArea(): number {
    return Math.floor(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error... for rectangle please check');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
