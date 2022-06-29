type Colors = 'red' | 'green' | 'blue';

enum Figures {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Figures,
  color: Colors,
  getArea(): number,
}

function getRoundValue(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Figures.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a + this.b <= this.c
        || this.a + this.c <= this.b
        || this.b + this.c <= this.a) {
      throw new Error('The longest side is bigger than a sum of two others');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The length of one or more sides is less than zero');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return getRoundValue(area);
  }
}

export class Circle implements Figure {
  public shape = Figures.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be a positive integer');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getRoundValue(area);
  }
}

export class Rectangle implements Figure {
  public shape = Figures.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The length of one or two sides is less than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRoundValue(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
