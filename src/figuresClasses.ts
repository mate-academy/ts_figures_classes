type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

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
      throw new Error('not a triangle');
    }

    if ((this.a + this.b <= c)
      || (this.a + this.c <= b)
      || (this.b + this.c <= a)) {
      throw new Error('not a triangle');
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(halfPerimetr * (halfPerimetr - this.a)
    * (halfPerimetr - this.b) * (halfPerimetr - this.c));

    return Number(square.toFixed(2));
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('not a circle');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('not a rectangle');
    }
  }

  getArea(): number {
    return Number((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
