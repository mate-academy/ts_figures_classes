enum Shape {
  Rectangle = 'rectangle',
  Triangle = 'triangle',
  Circle = 'circle',
}

type Color = 'blue' | 'red' | 'green';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number[];
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
     || this.b <= 0
     || this.c <= 0
    ) {
      throw new Error('Parameters are not valid');
    }

    if (
      this.a >= this.b + this.c
  || this.b >= this.a + this.c
  || this.c >= this.a + this.b
    ) {
      throw new Error(`sides ${this.a}, ${this.b} `
    + `and ${this.c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(result * 100) / 100;
  }
}
export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius can\'t be 0 or less');
    }
  }

  getArea(): number {
    const result = 3.14 * this.radius ** 2;

    return Math.round(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('Parameters are not valid');
    }
  }

  getArea():number {
    const result = this.width * this.heigth;

    return Math.round(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
