enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape : Shapes,
  color : Colors,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: string,
    public a : number,
    public b : number,
    public c : number,
  ) {
    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw Error('Incorrect length');
    }
  }

  getArea() : number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: string,
    public radius : number,
  ) {
    if (this.radius <= 0) {
      throw Error('Incorrect length');
    }
  }

  getArea() : number {
    const s = (this.radius ** 2) * Math.PI;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: string,
    public width : number,
    public height : number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect length');
    }
  }

  getArea() : number {
    return this.width * this.height;
  }
}

export function getInfo(figure : Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
