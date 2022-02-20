type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The sides should be a positive numbers');
    }

    if ((this.a + this.b) <= this.c
      || (this.b + this.c) <= this.a
      || (this.c + this.a) <= this.b) {
      throw new Error('Sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c));

    return +square.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('The radius should be a positive number');
    }
  }

  getArea(): number {
    const square: number = Math.PI * (this.radius ** 2);

    return Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('The sides should be a positive numbers');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
