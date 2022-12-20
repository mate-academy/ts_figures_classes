
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
    || this.b <= 0
    || this.c <= 0
    || this.a >= this.b + this.c
    || this.b >= this.a + this.c
    || this.c >= this.a + this.b
    ) {
      throw new Error('Unable to form triangle with sides'
      + `${this.a}, ${this.b} and ${this.b}`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const TriangleArea: number = Math.sqrt(s
      * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor((TriangleArea) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`Unable to form circle with following radius -
      ${this.radius}`);
    }
  }

  getArea(): number {
    const circleArea = this.radius * this.radius * Math.PI;

    return Math.floor((circleArea) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0
      || this.height <= 0) {
      throw new Error('Unable to form rectangle with width'
      + `${this.width}, and height ${this.height}`);
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
