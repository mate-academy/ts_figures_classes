type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    const isTriagleBroken = (): boolean => {
      const greater = Math.max(this.a, this.b, this.c);
      const values = [this.a, this.b, this.c];
      const indexGreater = values.indexOf(greater);

      values.splice(indexGreater, 1);

      const sumSmall = values[0] + values[1];

      return greater >= sumSmall;
    };

    if (a <= 0 || b <= 0 || c <= 0 || isTriagleBroken()) {
      throw new Error('sides 1, 2 and 3 cannot form a triangle');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    const areaRound = area * 100;

    const result = Math.floor(areaRound) / 100;

    return result;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('invalid radius');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    const areaRound = area * 100;

    const result = Math.floor(areaRound) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width or height is invalid');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const area = this.width * this.height;

    const areaRound = area * 100;

    const result = Math.floor(areaRound) / 100;

    return result;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
