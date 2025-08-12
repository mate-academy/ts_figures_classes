export interface Figure {
  shape: string;
  color: string;
  a: number;
  b?: number;
  c?: number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || Math.max(a, b, c) >= (a + b + c) / 2) {
      throw new Error('Input data error!');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Number(triangleSquare.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('Input data error!');
    }
  }

  getArea(): number {
    const circleSq = Math.PI * this.a ** 2;

    return Math.floor(circleSq * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Input data error!');
    }
  }

  getArea(): number {
    const rectangleSq = this.a * this.b;

    return Number(rectangleSq.toFixed(2));
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  if (figure instanceof Triangle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else if (figure instanceof Circle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }
}
