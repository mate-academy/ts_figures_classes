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
      throw new Error('Triangle side should be a positive!');
    }

    if ((this.a + this.b) <= this.c
    || (this.b + this.c) <= this.a
    || (this.c + this.a) <= this.b) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const S: number = Math.sqrt(semiP * (semiP - this.a)
    * (semiP - this.b) * (semiP - this.c));

    return Number(S.toFixed(2));
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be positive!');
    }
  }

  getArea(): number {
    const S: number = Math.PI * this.radius ** 2;

    return Math.floor(S * 100) / 100;
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
      throw new Error('Rectangle side should be a positive');
    }
  }

  getArea(): number {
    const S: number = this.a * this.b;

    return Number(S.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
