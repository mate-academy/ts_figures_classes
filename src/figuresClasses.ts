type Color = 'red'| 'green'|'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length below 0');
    }

    const arr = [];

    arr.push(a);
    arr.push(b);
    arr.push(c);

    arr.sort((x, y) => y - x);

    if (arr[0] >= (arr[1] + arr[2])) {
      throw new Error('Side length below 0');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) * 0.5;
    const square = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length below 0');
    }
  }

  getArea():number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length below 0');
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
