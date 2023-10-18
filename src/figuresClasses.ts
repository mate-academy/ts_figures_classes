type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('length is <= 0');
    }

    const condition = [this.a, this.b, this.c].sort((a1, a2) => a1 - a2);

    if (condition[2] >= condition[0] + condition[1]) {
      throw new Error('the longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('the radius is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public heigt: number,

  ) {
    if (this.width <= 0 || this.heigt <= 0) {
      throw new Error('width or heigth is <= 0');
    }
  }

  getArea(): number {
    return Number((this.width * this.heigt).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  // деструктуризацію виявилось неможливо зробити, не працює метод getInfo
}
