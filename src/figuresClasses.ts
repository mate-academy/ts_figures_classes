export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || this.a + this.b <= this.c || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('This figure is not a triangle');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    const squareOfTriangle = Math.sqrt(perimeter * ((perimeter - this.a)
    * (perimeter - this.b) * (perimeter - this.c)));

    return Math.floor(100 * squareOfTriangle) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('This figure is not a circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('This figure is not a rectangle');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
