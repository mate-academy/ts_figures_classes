type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const allow: number = (this.a + this.b + this.c) / 2;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Can be only positive numbers');
    }

    if (this.a >= allow || this.b >= allow || this.c >= allow) {
      throw new Error('it can\'t be a triangle');
    }
  }

  getArea(): number {
    const sum: number = (this.a + this.b + this.c) / 2;
    const operation: number = sum * (sum - this.a)
    * (sum - this.b) * (sum - this.c);
    const area = Math.sqrt(operation);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw Error('Only positive numbers');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw Error('Only positive numbers');
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
