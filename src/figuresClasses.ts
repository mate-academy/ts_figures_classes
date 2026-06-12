export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of numbers have unexcepted value');
    }

    if ((this.c >= this.a + this.b)
      || (this.b >= this.a + this.c)
      || (this.a >= this.b + this.c)) {
      throw new Error('Biggest number are less or equal the sum of rest numbers');
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      halfPerimetr *
      (halfPerimetr - this.a) *
      (halfPerimetr - this.b) *
      (halfPerimetr - this.c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius have unexcepted number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('One of sides of rectangle have less or equal to 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
