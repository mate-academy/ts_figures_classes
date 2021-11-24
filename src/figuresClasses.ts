export interface Figure {
  shape: string;
  color: string;

  getArea(): number;

}

type Shape = 'triangle' | 'circle' | 'rectangle';

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Values should not be negative or zero');
    }

    if (a + b <= c || c + b <= a || c + a <= b) {
      throw new Error('Incorrect triangle');
    }
  }

  getArea(): number {
    const halfPermimeter: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(halfPermimeter
    * (halfPermimeter - this.a)
    * (halfPermimeter - this.b)
    * (halfPermimeter - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should not be negative or zero');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor((square * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should not be negative or zero');
    }
  }

  getArea(): number {
    const square = this.height * this.width;

    return (square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
