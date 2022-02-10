type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

export function roundDown(num: number) : number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const triangleSides: number[] = [a, b, c].sort((x, y) => x - y);

    if (triangleSides.some((el) => (el <= 0))
    || triangleSides[0] + triangleSides[1] <= triangleSides[2]) {
      throw new Error('Invalid data for triangle sides');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiP
      * (semiP - this.a) * (semiP - this.b) * (semiP - this.c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Invalid data for circle radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public heigh: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || heigh <= 0) {
      throw new Error('Invalid data for rectangle sides');
    }
  }

  getArea(): number {
    const area = this.width * this.heigh;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
