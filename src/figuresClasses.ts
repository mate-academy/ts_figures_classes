type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid data input');
    }

    if ((this.c >= this.a + this.b)
      || (this.a >= this.c + this.b)
      || (this.b >= this.a + this.c)
    ) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const halfSum = ((this.a + this.b + this.c) / 2);

    return Math.floor(
      Math.sqrt(halfSum * (halfSum - this.a)
        * (halfSum - this.b) * (halfSum - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid data input');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius * this.radius)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  area: number = 0;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid data input');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
