export interface Figure {
  shape: string;
  color: string;
  getArea():number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side of a triangle cannot be zero or negative!');
    }

    const triangleSide:number[] = [a, b, c].sort((prev, cur) => cur - prev);

    if (triangleSide[0] >= triangleSide[1] + triangleSide[2]) {
      throw new Error(`This triangle is not possible in the current physical
                       model of the world structure. Check input data!`);
    }
  }

  getArea():number {
    const semiPer = (this.a + this.b + this.c) / 2;
    const sqrSquare = semiPer
      * ((semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c));

    return (Math.floor(Math.sqrt(sqrSquare) * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of a circle cannot be zero or negative!');
    }
  }

  getArea(): number {
    const square: number = Math.PI * (this.radius * this.radius);

    return (Math.floor(square * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides of a rectangle cannot be zero or negative!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
